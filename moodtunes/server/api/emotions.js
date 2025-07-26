
import express from 'express';
import { getEmotion } from '../controllers/emotionsControllers.js';
const router = express.Router();

router.post('/analyze', getEmotion);

export default router;
