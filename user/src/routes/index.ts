import {Router} from 'express'
import userRoutes from './user.routes';
import authRoutes from './auth.routes';

const routes = Router();

routes.use("/user", userRoutes)
routes.use("/", authRoutes)

export default routes;