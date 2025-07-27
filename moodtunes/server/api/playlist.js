
import express from 'express';
import { getPlaylist } from '../controllers/playlistControllers.js';
const router = express.Router();

router.get('/', getPlaylist);

export default router;
