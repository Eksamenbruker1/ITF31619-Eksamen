import express from 'express';
import { referenceController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/authorization.js';

const router = express.Router();

router.get('/:id', referenceController.get);
router.get('/', referenceController.list);

router.post('/', referenceController.create);

router.put('/:id', [isAuthenticated, isAuthorized()], referenceController.update);

router.delete(
  '/:id',
  [isAuthenticated, isAuthorized()],
  referenceController.remove
);

export default router;
