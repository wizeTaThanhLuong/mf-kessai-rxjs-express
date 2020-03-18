import { Router } from 'express';
import BillingRouter from './Billings';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/billings', BillingRouter);

// Export the base-router
export default router;
