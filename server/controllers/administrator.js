import catchAsyncErrors from '../middleware/catchAsync.js';
import { administratorService } from '../services/index.js';

export const get = catchAsyncErrors(async (req, res, next) => {
    const administrator = await administratorService.getAdministratorById(req.params.id);
    if (!administrator) {
      return next(
        new ErrorHandler(`Finner ikke administratoren med ${req.params.id}`, 404)
      );
    }
    res.status(200).json(administrator);
  });

export const create = catchAsyncErrors(async (req, res, next) => {
    const administrator = await administratorService.createAdministrator(req.body);
    res.status(201).json(administrator);
});