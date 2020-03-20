import {generateTestMail} from '../utils/mailer';
import {INTERNAL_SERVER_ERROR} from 'http-status-codes';
import Client, { IRestResponse } from './Client';
import {Observable} from 'rxjs';

export type getPlansRequest = {
  matching: boolean;
}

export type getPlansResponse = {
  id: string;
  id_for_helper: string;
  state: string;
  result?: any,
  accepted_at: string;
  plans_selected_at?: string;
  document_submitted_at?: string;
  prepared_at?: string;
  verified_at?: string;
}

export type choosePlanRequest = {
  id: string;
  ids: string[];
}

export type choosePlanResponse = {} | null | undefined;

export class TrustDockService extends Client {
  constructor() {
    super({
      basePath: 'https://api.test.trustdock.io/v2/',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.TRUSTDOCK_BEARER_TOKEN}`,
      },
    });
  }

  getPlans({ matching }: getPlansRequest): Observable<IRestResponse<getPlansResponse>> {
    return this.request<getPlansResponse>({
      path: 'verifications',
      method: 'POST',
      body: { matching },
    });
  }

  choosePlan({ id, ids }: choosePlanRequest): Observable<IRestResponse<choosePlanResponse>> {
    return this.request<choosePlanResponse>({
      path: `verifications/${id}/plans`,
      method: 'PUT',
      body: { ids },
    });
  }
}
