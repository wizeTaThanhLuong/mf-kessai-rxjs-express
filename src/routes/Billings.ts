import { Request, Response, Router } from 'express';
import { BAD_REQUEST, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import { BillingApi } from '../generated';

// Init shared
const router = Router();


/******************************************************************************
 *                      Get All Billings - "GET /api/billings"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
    const billingApi = new BillingApi();
    const billingApiObservable = billingApi.getBillingsList({});
    billingApiObservable.subscribe({
        next: value => res.status(OK).json({ res: value }),
        error: err => res.status(BAD_REQUEST).json({ message: err.toString() }),
        complete: () => null,
    });
});

/******************************************************************************
 *                      Get Billing - "GET /api/billings/:billingId"
 ******************************************************************************/

router.get('/:billingId', async (req: Request, res: Response) => {
    const { billingId } = req.params as ParamsDictionary;
    const billingApi = new BillingApi();
    const billingApiObservable = billingApi.getBilling({ billingId });
    billingApiObservable.subscribe({
        next: value => res.status(OK).json({ billingId, res: value }),
        error: err => res.status(BAD_REQUEST).json({ message: err.toString() }),
        complete: () => null,
    });
});

export default router;
