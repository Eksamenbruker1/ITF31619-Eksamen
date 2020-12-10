import catchAsyncErrors from '../middleware/catchAsync.js';
import { userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`Finner ikke brukeren med ${req.params.id}`, 404),
    );
  }
  res.status(200).json(user);
});

export const getAllAdminsList = catchAsyncErrors(async (req, res, next) => {
  const admins = await userService.getAllAdmins();
  if (!admins) {
    return next(
      new ErrorHandler('Det finnes ingen admins i databasen', 404),
    );
  }
  res.status(200).json(admins);
});

export const create = catchAsyncErrors(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
});
