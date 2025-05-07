import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import connectDB from './config/db.js';
import colors from 'colors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';



dotenv.config()
// 📢 yachya mule DB connect hoil!


// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env file
dotenv.config({ path: path.resolve(__dirname, './.env') });

// Debugging
console.log('ENV:', process.env.NODE_ENV);
console.log('ENV FILE PATH:', path.resolve(__dirname, './.env'));

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import supplierRoutes from './routes/supplierRoutes.js';

// DB connection
connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/supplier', supplierRoutes);

// Paypal config
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

// Static files for uploads
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send("API is running");
  });
}

// Error handlers
app.use(notFound);
app.use(errorHandler);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
