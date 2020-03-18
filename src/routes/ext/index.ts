import { Router } from 'express';
import MFKessaiRouter from './mf';
import SendgridRouter from './sg';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/mf', MFKessaiRouter);
router.use('/sg', SendgridRouter);

// Export the base-router
export default router;
