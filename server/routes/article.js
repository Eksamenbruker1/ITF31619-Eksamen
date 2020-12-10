import express from 'express';
import { articleController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/authorization.js';
import { validateFields } from '../middleware/validation.js';
import { createArticleSchema } from '../schemas/article.js';

const router = express.Router();

router.get('/:slug', articleController.get);
router.get('/', articleController.list);

// router.post('/', validateFields(createArticleSchema), articleController.create);
router.post('/', validateFields(createArticleSchema), [isAuthenticated, isAuthorized()], articleController.create);

router.put('/:id', [isAuthenticated, isAuthorized()], articleController.update);
// router.put('/:id', articleController.update);

router.delete(
  '/:id',
  [isAuthenticated, isAuthorized()],
  articleController.remove,
);

export default router;
