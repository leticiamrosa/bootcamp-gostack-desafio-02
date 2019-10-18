import { Router } from 'express';

// controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// middleware
import authMiddleware from './app/middleware/auth';
import StudentController from './app/controllers/StudentController';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.post('/students/create', StudentController.store);
routes.post('/users/create', UserController.store);
routes.put('/users', UserController.update);

export default routes;
