import catchAsyncErrors from '../middleware/catchAsync.js';
import { userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import { sendToken } from '../utils/jwtToken.js';

export const registerUser = catchAsyncErrors(async (req, res, next) => {
  if (req.body.role) {
    return next(new ErrorHandler('Din snik', 403));
  }

  const user = await userService.createUser(req.body);
  sendToken(user, res);
});

export const registerAdmin = catchAsyncErrors(async (req, res, next) => {
  if (req.params.AUTHORIZATION_KEY !== process.env.AUTHORIZATION_KEY) {
    return next(new ErrorHandler('Du feilet autoriseringen'));
  }
  const user = await userService.createAdmin(req.body);
  sendToken(user, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler('Du må fylle ut epost eller passord', 400));
  }

  const user = await userService.getUserByEmail({ email }, true);

  if (!user) {
    return next(
      new ErrorHandler(
        'Du har kanskje skrevet feil epost eller passord, ikke vet jeg. 1'
      )
    );
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(
      new ErrorHandler(
        'Du har kanskje skrevet feil epost eller passord, ikke vet jeg. 2'
      )
    );
  }

  sendToken(user, res);
});

export const logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: 'Logget ut',
  });
});

export const currentUser = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.getUserById(req.user.id);
  if (!user) {
    return next(new ErrorHandler('Brukeren finnes ikke', 404));
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});
