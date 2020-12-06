import express from 'express';
import { categoryController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/authorization.js';

const router = express.Router();

router.get('/:id', categoryController.get);
router.get('/', categoryController.list);

router.post('/', isAuthenticated, isAuthorized(), categoryController.create);

export default router;
