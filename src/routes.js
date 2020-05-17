import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = Router();

routes.get('/user', UserController.index);
routes.post('/user', UserController.store)

export default routes;