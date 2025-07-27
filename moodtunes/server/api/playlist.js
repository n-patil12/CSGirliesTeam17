
import express from 'express';
import { getPlaylists, createPlaylist } from '../controllers/playlistControllers.js';
const router = express.Router();

router.post('/', createPlaylist);
router.get('/:user_id', getPlaylists);

export default router;
