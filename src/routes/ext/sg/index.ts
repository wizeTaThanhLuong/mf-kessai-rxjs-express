import { Router } from 'express';
import { MailService } from '../../../services';
import { ParamsDictionary} from 'express-serve-static-core';

// Init router and path
const router = Router();

// Add sub-routes
router.post('/sendMail', (req, res) => {
    try {
        const { to } = req.body as ParamsDictionary;
        MailService.sendMail({ to })
            .then(({ payload, code }) => res.status(code).json(payload));
    } catch ({ payload, code }) {
        res.status(code).json(payload);
    }
});

// Export the base-router
export default router;
