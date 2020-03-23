import {generateTestMail} from '../utils/mailer';
import {INTERNAL_SERVER_ERROR} from 'http-status-codes';
import Client, { IRestResponse } from './Client';
import {Observable} from 'rxjs';
import {TComparingData, TPersonalPlan} from '../types';

export type getPlansRequest = {
  matching: boolean;
};

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
};

export type choosePlanRequest = {
  id: string;
  ids: string[];
};

export type choosePlanResponse = {} | null | undefined;

export type confirmDocumentsRequest = {
  id: string;
  plan_id: string[];
  documents: TPersonalPlan;
};

export type confirmDocumentsResponse = {} | null | undefined;

export type compareDataRequest = {
  id: string;
  data: TComparingData;
};

export type compareDataResponse = {} | null | undefined;

export type getVerificationRequest = {
  id: string;
};

export type getVerificationResponse = {
  id?: string;
  id_for_helper?: string;
  state?: 'accepted' | 'plans_selected' | 'document_submitted' | 'in_progress' | 'verified';
  result?: 'approved' | 'denied' | null;
  accepted_at?: string;
  plans_selected_at?: string | null;
  document_submitted_at?: string | null;
  prepared_at?: string | null;
  verified_at?: string | null;
  comparing_data?: object;
  records?: object[];
};

export type deleteVerificationRequest = {
  id: string;
};

export type deleteVerificationResponse = {} | null | undefined;

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

  confirmDocuments({ id, plan_id, documents }: confirmDocumentsRequest): Observable<IRestResponse<confirmDocumentsResponse>> {
    return this.request<confirmDocumentsRequest>({
      path: `verifications/${id}/plans/${plan_id}/documents`,
      method: 'PUT',
      body: documents,
    });
  }

  compareData({ id, data }: compareDataRequest): Observable<IRestResponse<compareDataResponse>> {
    return this.request<compareDataRequest>({
      path: `/verifications/${id}/comparing_data`,
      method: 'PUT',
      body: data,
    });
  }

  getConfirmationStatus({ id }: getVerificationRequest): Observable<IRestResponse<getVerificationResponse>> {
    return this.request<getVerificationRequest>({
      path: `/verifications/${id}`,
      method: 'GET',
    });
  }

  deleteConfirmationStatus({ id }: deleteVerificationRequest): Observable<IRestResponse<deleteVerificationResponse>> {
    return this.request<getVerificationRequest>({
      path: `/verifications/${id}`,
      method: 'DELETE',
    });
  }
}
