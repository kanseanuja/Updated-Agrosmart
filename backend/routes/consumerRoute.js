import express from 'express';
import { getConsumerProducts } from '../controllers/consumerProductController.js';

const router = express.Router();

router.get('/', getConsumerProducts);

export default router;
