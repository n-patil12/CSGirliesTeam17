import express from 'express';
import { handleLogin, handleNewUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', handleLogin);
router.post('/register', handleNewUser);

export default router;
