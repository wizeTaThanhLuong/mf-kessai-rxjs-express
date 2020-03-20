import { Request, Response, Router } from 'express';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status-codes';
import {choosePlanRequest, getPlansRequest, TrustDockService} from '../../../services/TrustDockService';

// Init shared
const router = Router();

/******************************************************************************
 *                      Get All Plans - "GET /extapi/td/get-plans"
 ******************************************************************************/

router.get('/get-plans', async (req: Request, res: Response) => {
  const { matching } = req.body as getPlansRequest;
  const trustDockService = new TrustDockService();
  const getPlansObservable = trustDockService.getPlans({ matching });

  getPlansObservable.subscribe({
    next: value => res.status(OK).json(value.response),
    error: err => res.status(err.status || INTERNAL_SERVER_ERROR).json(err.response || err.toString()),
    complete: () => null,
  });
});

/******************************************************************************
 *                      Get All Billings - "POST /extapi/td/choose-plans"
 ******************************************************************************/

router.post('/choose-plan', async (req: Request, res: Response) => {
  const { id, ids } = req.body as choosePlanRequest;
  const trustDockService = new TrustDockService();
  const getPlansObservable = trustDockService.choosePlan({ id, ids });

  getPlansObservable.subscribe({
    next: value => res.status(OK).json(value.response),
    error: err => res.status(err.status || INTERNAL_SERVER_ERROR).json(err.response || err.toString()),
    complete: () => null,
  });
});

export default router;
