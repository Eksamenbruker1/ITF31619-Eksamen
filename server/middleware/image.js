import multer from 'multer';
import ErrorHandler from '../utils/errorHandler.js';

function fileFilter(req, file, cb) {
  const filetypes = /\.(jpeg|jpg|png)$/;
  if (!file.originalname.match(filetypes)) {
    return cb(new ErrorHandler('Vennligst bruk bildefil som er av typen jpeg, jpg eller png.', 400));
  }
  cb(null, true);
}

const veryUniqueName = Date.now();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images');
  },
  filename(req, file, cb) {
    cb(null, `${veryUniqueName}${file.originalname}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 2000000 },
  fileFilter,
}).single('image');
