import { Router } from 'express';
import UserRouter from './Users';
import BillingRouter from './Billings';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/billings', BillingRouter);

// Export the base-router
export default router;
