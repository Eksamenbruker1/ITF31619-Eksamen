import jwt from 'jsonwebtoken';
import { userService } from '../services/index.js';
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
    const user = await userService.getUserById(decoded.id);

    if(!user) {
        return next(new ErrorHandler('Brukeren ble ikke funnet', 404));
    }

    req.user = user;
    next();
});

export const isAuthorized = () => (req, res, next) => {
  if (req.user.role !== 'admin') {
        return next(new ErrorHandler('Du er ikke autorisert til å utføre handlingen', 403));
    }
    next();
};