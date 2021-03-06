// tslint:disable
/**
 * MF KESSAI API v2
 * MF KESSAI REST API
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: api.support@mfkessai.co.jp
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery } from '../runtime';
import {
    PayoutRefundsList,
} from '../models';

export interface GetPayoutRefundsListRequest {
    payoutId?: string;
    after?: string;
    before?: string;
    limit?: number;
}

/**
 * no description
 */
export class PayoutRefundApi extends BaseAPI {

    /**
     * 返金一覧取得
     */
    getPayoutRefundsList = ({ payoutId, after, before, limit }: GetPayoutRefundsListRequest): Observable<PayoutRefundsList> => {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'apikey': this.configuration.apiKey('apikey') }), // apikey authentication
        };

        const query: HttpQuery = {};

        if (payoutId != null) { query['payout_id'] = payoutId; }
        if (after != null) { query['after'] = after; }
        if (before != null) { query['before'] = before; }
        if (limit != null) { query['limit'] = limit; }

        return this.request<PayoutRefundsList>({
            path: '/payout_refunds',
            method: 'GET',
            headers,
            query,
        });
    };

}
