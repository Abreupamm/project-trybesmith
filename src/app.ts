import express from 'express';
import 'express-async-errors';
import ordersRouter from './routers/OrdersRouter';
import productsRouter from './routers/ProductsRourer';
import userRouter from './routers/UsersRouter';
// import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', userRouter);

app.use('/orders', ordersRouter);
// app.use(errorMiddleware);

export default app;
