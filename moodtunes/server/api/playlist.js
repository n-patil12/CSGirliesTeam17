
import express from 'express';
import { getPlaylist } from '../controllers/playlistControllers.js';
const router = express.Router();

router.post('/', getPlaylist);

export default router;
