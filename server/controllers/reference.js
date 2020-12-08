import jwt from "jsonwebtoken";
import catchAsyncErrors from "../middleware/catchAsync.js";
import { referenceService, userService } from "../services/index.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendMail } from "../utils/sendEmail.js";

export const get = (isTest) => catchAsyncErrors(async (req, res, next) => {
  const reference = await referenceService.getReferenceById(req.params.id);
  if (!reference) {
    return next(
      new ErrorHandler(
        `Finner ikke henvendelsen med id-en ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json(reference);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await referenceService.listReferences();
  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res, next)  => {
  let token;
  if (req.cookies.token) {
    token = req.cookies.token;
    const userId = jwt.verify(token, process.env.JWT_SECRET_KEY).id;
    const user = await userService.getUserById(userId);
    req.body.name = user.name;
    req.body.email = user.email;
  }

  const reference = await referenceService.createReference(req.body);

  // Mail to the user that made the reference
  // First, if the user is logged in take email from active user
  if(isTest) {
    try {
        await sendMail({
          email: req.body.email,
          subject: `LG Rørleggerservice AS: henvendelse er registrert med ID ${reference.id}`,
          message: `Vi vil så fort vi kan svare på din henvendelse. Din henvendelse har innholdet: \n "${reference.content}"
                \n Din kontakt epost er: ${reference.email} og temaet er "${reference.subject}"
                \n \n Vennligst vent til vi kan svare på din henvendelse. Din refereranse ID er ${reference.id}`,
        });
      } catch (error) {
        console.log("Feil med epost håndteringen");
      }
    
      const admins = await userService.getAllAdmins();
    
      for(let i = 0; i < admins.length; i++) {
        try {
                await sendMail({
                    email: admins[i].email,
                    subject: `LG Rørleggerservice AS: ny henvendelse registrert med id ${reference.id}`,
                    message: `Det har blitt registrert en ny henvendelse. Henvendelsen har innholdet: \n "${reference.content}"
                        \n Kontakt eposten til brukeren er: ${reference.email} og temaet er "${reference.subject}"`,
                });
                } catch (error) {
                console.log("Feil med epost håndteringen");
                } 
        }
  }


  res.status(201).json(reference);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let reference = await referenceService.getReferenceById(req.params.id);
  if (!reference) {
    return next(
      new ErrorHandler(`Finner ikke henvendelsen med ${req.params.id}`, 404)
    );
  }
  reference = await referenceService.updateReference(req.params.id, req.body);
  res.status(200).json(reference);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let reference = await referenceService.getReferenceById(req.params.id);
  if (!reference) {
    return next(
      new ErrorHandler(`Finner ikke henvendelsen med ${req.params.id}`, 404)
    );
  }
  reference = await referenceService.removeReference(req.params.id);
  res.status(204).json({});
});
