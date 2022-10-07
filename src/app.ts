import express from 'express';
import 'express-async-errors';
import productsRouter from './routers/ProductsRourer';
// import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

// app.use(errorMiddleware);

export default app;
