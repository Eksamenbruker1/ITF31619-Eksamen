import catchAsyncErrors from '../middleware/catchAsync.js';
import { authorService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';

export const list = catchAsyncErrors(async (req, res, next) => {
  const authorList = await authorService.listAuthors();
  if (!authorList) {
    new ErrorHandler('Forfatter listen ble ikke funnet', 404);
  }
  res.status(200).json(authorList);
});
