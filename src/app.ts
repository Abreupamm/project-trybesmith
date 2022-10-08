import express from 'express';
import 'express-async-errors';
import productsRouter from './routers/ProductsRourer';
import userRouter from './routers/UsersRouter';
// import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', userRouter);
// app.use(errorMiddleware);

export default app;
