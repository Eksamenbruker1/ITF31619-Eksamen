import express from 'express';
import { userController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', userController.get);
//router.get('/list/:id', userController.list)
//router.get('/:email', userController.get);
router.post('/', userController.create);

export default router;