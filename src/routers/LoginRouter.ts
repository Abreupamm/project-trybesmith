import { Router } from 'express';
import UserController from '../controllers/UsersController';

const loginRouter = Router();

const userController = new UserController();

loginRouter.post('/', userController.);

export default loginRouter;