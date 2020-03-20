import { Router } from 'express';
import MFKessaiRouter from './mf';
import SendgridRouter from './sg';
import TrustDockRouter from './td';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/mf', MFKessaiRouter);
router.use('/sg', SendgridRouter);
router.use('/td', TrustDockRouter);

// Export the base-router
export default router;
