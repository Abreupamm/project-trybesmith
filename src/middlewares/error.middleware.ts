import { NextFunction, Request, Response } from 'express';
import statusCodes from '../utlis/statusCodes';

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(statusCodes.BAD_REQUEST).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(statusCodes.NOT_FOUND).json({ message });
      break;
    case 'ConflictError':
      res.status(statusCodes.CONFLICT).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
};
export default errorMiddleware;