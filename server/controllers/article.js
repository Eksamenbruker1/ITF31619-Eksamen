import jwt from 'jsonwebtoken';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { articleService, userService, categoryService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import { isAuthenticated, isAuthorized } from '../middleware/authorization.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const article = await articleService.getArticleBySlug(req.params.slug);
  if (!article) {
    return next(
      new ErrorHandler(`Finner ikke artikkelen med sluggen ${req.params.slug}`, 404),
    );
  }
  res.status(200).json(article);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  let token;
  if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    // This should make it so the user that's logged in should be never be able to cheat their way to see secret articles
    req.query.secret = false;
    console.log('User is not logged in, only returning articles that are not secret');
    const result = await articleService.listArticles(req.query);
    res.status(200).json(result);
  } else {
    console.log('User is logged in, returning all available articles if applicable');
    const result = await articleService.listArticles(req.query);
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await userService.getUserById(decoded.id);

    res.status(200).json(result);
  }
});

export const create = catchAsyncErrors(async (req, res, next) => {
  let token;
  if (req.cookies.token) {
    token = req.cookies.token;
  }

  const user = jwt.verify(token, process.env.JWT_SECRET_KEY).id;
  req.body.user = user;
  const article = await articleService.createArticle(req.body);
  res.status(201).json(article);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return next(
      new ErrorHandler(`Finner ikke artikkel med ${req.params.id}`, 404),
    );
  }
  article = await articleService.updateArticle(req.params.id, req.body);
  res.status(200).json(article);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return next(
      new ErrorHandler(`Finner ikke artikkel med ${req.params.id}`, 404),
    );
  }
  article = await articleService.removeArticle(req.params.id);
  res.status(204).json({ success: 'Artikkelen har blitt slettet' });
});
