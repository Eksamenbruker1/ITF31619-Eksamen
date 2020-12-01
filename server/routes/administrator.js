import express from 'express';
import { administratorController } from '../controllers/index.js';

const router = express.Router();

router.post('/', administratorController.create);

export default router;