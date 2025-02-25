import catchAsyncErrors from '../middleware/catchAsync.js';
import { categoryService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const category = await categoryService.getCategoryById(req.params.id);
  if (!category) {
    return next(
      new ErrorHandler(`Finner ikke kategori med ${req.params.id}`, 404),
    );
  }
  res.status(200).json(category);
});

export const list = catchAsyncErrors(async (req, res) => {
  const result = await categoryService.listCategories();
  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  res.status(201).json(category);
});
