import * as express from 'express';
import * as compression from 'compression';
import reportRoutes from './routes/reposts';
import { globalErrorHandler } from './middleware/globalErrorHandler';
import { globalLogErrors } from './middleware/globalLogError';
import 'express-async-errors';

const PORT = 4000;
const app = express();

// Middlewares
app.use(compression());
app.use(express.json());

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

// Routes
app.use(reportRoutes);

// Error handling
app.use(globalLogErrors);
app.use(globalErrorHandler);

export { app };
