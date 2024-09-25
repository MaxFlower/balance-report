import * as express from 'express';
import * as compression from 'compression';
import reportRoutes from './routes/reposts';
import { globalErrorHandler } from './middleware/globalErrorHandler';
import { globalLogErrors } from './middleware/globalLogError';
import 'express-async-errors';

const PORT = 4000;
const app = express();
const cors = require('cors');

// Middlewares
app.use(compression());
app.use(express.json());
app.use(cors())
// Custom CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

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
