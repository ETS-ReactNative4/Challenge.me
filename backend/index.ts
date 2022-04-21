import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import 'dotenv';
import { ResponseBody } from './model/interfaces';

import user from './routers/user.router';
import accessibility from './routers/accessibility.router';
import challenge from './routers/challenge.router';
import { errorHandler } from './error-handler/error-handler';

if (process.env.NODE_ENV === 'production') console.log = () => {};

const app: Application = express();
const port = process.env.PORT;
const corsOptions = { origin: true, credentials: true };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  const resBody: ResponseBody = { message: 'Server operating normally.' };
  return res.status(200).json(resBody);
});

app.use('/user', user);
app.use('/accessibility', accessibility);
app.use('/challenge', challenge);

// Error handler must always be at the end of application stack.
app.use(errorHandler);

try {
  app.listen(port, (): void => {
    console.log(`Listening at port ${port}`);
  });
} catch (error: any) {
  console.log(`Error occurred: ${error.message}`);
}
