import authRoutes from './auth.js';
import userRoutes from './users.js';

export default (app) => {
  app.use('/auth', authRoutes);
  app.use('/users', userRoutes);
};
