import jwt from 'jsonwebtoken';
import { administratorService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from './catchAsync.js';

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    let token;
    if(req.cookies.token) {
        token = req.cookies.token;
    }

    if(!token) {
        return next(new ErrorHandler('Du er ikke logget på', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const administrator = await administratorService.getAdministratorById(decoded.id);

    if(!administrator) {
        return next(new ErrorHandler('Brukeren ble ikke funnet', 404));
    }

    req.administrator = administrator;
    next();
});

export const isAuthorized = (AUTHORIZATION_KEY) => (req, res, next) => {
    if(process.env.AUTHORIZATION_KEY != AUTHORIZATION_KEY) {
        return next(new ErrorHandler('Du feilet autentiseringen og har ikke tilgang', 403));
    }
    next();
};