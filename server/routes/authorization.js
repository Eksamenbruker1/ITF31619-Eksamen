import express from 'express';
import { authorizationController } from '../controllers/index.js';
import { isAuthenticated } from '../middleware/authorization.js';

const router = express.Router();

router.post('/register', authorizationController.register);
router.post('/login', authorizationController.login);
router.post('/logout', authorizationController.logout);
router.get('/me', isAuthenticated, authorizationController.currentAdministrator);

export default router;