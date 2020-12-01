import catchAsyncErrors from '../middleware/catchAsync.js';
import { administratorService } from '../services/index.js';

export const create = catchAsyncErrors(async (req, res, next) => {
    const administrator = await administratorService.createAdministrator(req.body);
    res.status(201).json(administrator);
});