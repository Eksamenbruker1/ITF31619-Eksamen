import catchAsyncErrors from '../middleware/catchAsync.js';
import { administratorService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import { sendToken } from '../utils/jwtToken.js';

export const register = catchAsyncErrors(async (req, res, next) => {
    const administrator = await administratorService.createAdministrator(req.body);
    sendToken(administrator, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return next(new ErrorHandler('Du må fylle ut epost eler passord', 400));
    }

    const administrator = await administratorService.getAdministratorByEmail({ email }, true);

    if(!administrator) {
        return next(new ErrorHandler('Du har kanskje skrevet feil epost eller passord, ikke vet jeg. 1'));
    }

    const isPasswordMatched = await administrator.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Du har kanskje skrevet feil epost eller passord, ikke vet jeg. 2'));
    }

    sendToken(administrator, res);
});

export const logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token','none', {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        data: "Logget ut",
    });
});

export const currentAdministrator = catchAsyncErrors(async (req, res, next) => {
    const administrator = await administratorService.getAdministratorById(req.administrator.id);
    if(!administrator) {
        return next(new ErrorHandler('Brukeren finnes ikke', 404));
    }
    res.status(200).json({
        success: true,
        data: administrator,
    });
});