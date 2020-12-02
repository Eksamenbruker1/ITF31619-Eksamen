import express from 'express';
import { administratorController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', administratorController.get);
//router.get('/list/:id', administratorController.list)
//router.get('/:email', administratorController.get);
router.post('/', administratorController.create);

export default router;