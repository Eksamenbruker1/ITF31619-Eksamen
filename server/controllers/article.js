import jwt from 'jsonwebtoken';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { articleService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return next(
      new ErrorHandler(`Finner ikke artikkelen med id-en ${req.params.id}`, 404)
    );
  }
  res.status(200).json(article);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await articleService.listArticles();
  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res, next) => {
    let token;
    if(req.cookies.token) {
        token = req.cookies.token;
    }

    let user = jwt.verify(token, process.env.JWT_SECRET_KEY).id;
    req.body.user = user;
  const article = await articleService.createArticle(req.body);
  res.status(201).json(article);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return next(
      new ErrorHandler(`Finner ikke artikkel med ${req.params.id}`, 404)
    );
  }
  article = await articleService.updateArticle(req.params.id, req.body);
  res.status(200).json(article);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return next(
      new ErrorHandler(`Finner ikke artikkel med ${req.params.id}`, 404)
    );
  }
  article = await articleService.removeArticle(req.params.id);
  res.status(204).json({});
});
