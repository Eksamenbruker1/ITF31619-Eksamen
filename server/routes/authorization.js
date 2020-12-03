import express from 'express';
import { authorizationController } from '../controllers/index.js';
import { isAuthenticated } from '../middleware/authorization.js';

const router = express.Router();

router.post('/registeruser', authorizationController.registerUser);
router.post('/registeradmin/:AUTHORIZATION_KEY', authorizationController.registerAdmin);
router.post('/login', authorizationController.login);
router.post('/logout', authorizationController.logout);
router.get('/me', isAuthenticated, authorizationController.currentUser);

export default router;