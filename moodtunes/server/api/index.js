import authRoutes from './auth.js';
import userRoutes from './users.js';
import emotionRoutes from './emotions.js';

export default (app) => {
  app.use('/auth', authRoutes);
  app.use('/users', userRoutes);
  app.use('/emotion', emotionRoutes);
};
