import { Request, Response, Router } from 'express';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status-codes';
import {
  choosePlanRequest, compareDataRequest,
  confirmDocumentsRequest, getVerificationRequest,
  getPlansRequest,
  TrustDockService, deleteVerificationRequest
} from '../../../services/TrustDockService';

// Init shared
const router = Router();

/******************************************************************************
 *                      Get All Plans - "POST /extapi/td/get-plans"
 ******************************************************************************/

router.post('/get-plans', async (req: Request, res: Response) => {
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
 *                      Choose a plan - "PUT /extapi/td/choose-plans"
 ******************************************************************************/

router.put('/choose-plan', async (req: Request, res: Response) => {
  const { id, ids } = req.body as choosePlanRequest;
  const trustDockService = new TrustDockService();
  const getPlansObservable = trustDockService.choosePlan({ id, ids });

  getPlansObservable.subscribe({
    next: value => res.status(OK).json(value.response),
    error: err => res.status(err.status || INTERNAL_SERVER_ERROR).json(err.response || err.toString()),
    complete: () => null,
  });
});

/******************************************************************************
 *                      Submit confirmation - "PUT /extapi/td/confirm-documents"
 ******************************************************************************/

router.put('/confirm-documents', async (req: Request, res: Response) => {
  const { id, plan_id, documents } = req.body as confirmDocumentsRequest;
  const trustDockService = new TrustDockService();
  const confirmDocumentsObservable = trustDockService.confirmDocuments({ id, plan_id, documents });

  confirmDocumentsObservable.subscribe({
    next: value => res.status(OK).json(value.response),
    error: err => res.status(err.status || INTERNAL_SERVER_ERROR).json(err.response || err.toString()),
    complete: () => null,
  });
});

/******************************************************************************
 *                      Compare Data - "PUT /extapi/td/compare-data"
 ******************************************************************************/

router.put('/compare-data', async (req: Request, res: Response) => {
  const { id, data } = req.body as compareDataRequest;
  const trustDockService = new TrustDockService();
  const compareDataObservable = trustDockService.compareData({ id, data });

  compareDataObservable.subscribe({
    next: value => res.status(OK).json(value.response),
    error: err => res.status(err.status || INTERNAL_SERVER_ERROR).json(err.response || err.toString()),
    complete: () => null,
  });
});

/******************************************************************************
 *                      Get verification status - "GET /extapi/td/verification/:id"
 ******************************************************************************/

router.get('/verification/:id', async (req: Request, res: Response) => {
  const { id } = req.params as getVerificationRequest;
  const trustDockService = new TrustDockService();
  const getVerificationObservable = trustDockService.getConfirmationStatus({ id });

  getVerificationObservable.subscribe({
    next: value => res.status(OK).json(value.response),
    error: err => res.status(err.status || INTERNAL_SERVER_ERROR).json(err.response || err.toString()),
    complete: () => null,
  });
});

/******************************************************************************
 *                      Delete verification - "DELETE /extapi/td/verification/:id"
 ******************************************************************************/

router.delete('/verification/:id', async (req: Request, res: Response) => {
  const { id } = req.params as deleteVerificationRequest;
  const trustDockService = new TrustDockService();
  const deleteVerificationObservable = trustDockService.deleteConfirmationStatus({ id });

  deleteVerificationObservable.subscribe({
    next: value => res.status(OK).json(value.response),
    error: err => res.status(err.status || INTERNAL_SERVER_ERROR).json(err.response || err.toString()),
    complete: () => null,
  });
});

export default router;
