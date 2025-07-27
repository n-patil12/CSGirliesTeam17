import authRoutes from './auth.js';
import userRoutes from './users.js';
import playlistRoutes from './playlist.js';

export default (app) => {
  app.use('/auth', authRoutes);
  app.use('/users', userRoutes);
  app.use('/playlist', playlistRoutes);
};
