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
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    Transaction,
    TransactionPayload,
    TransactionsList,
} from '../models';

export interface CancelTransactionRequest {
    transactionId: string;
}

export interface CreateTransactionRequest {
    payload: TransactionPayload;
}

export interface GetTransactionRequest {
    transactionId: string;
}

export interface GetTransactionsListRequest {
    number?: string;
    customerId?: string;
    customerNumber?: string;
    billingId?: string;
    status?: GetTransactionsListStatusEnum;
    billing?: boolean;
    dateFrom?: Date;
    dateTo?: Date;
    createdAtFrom?: Date;
    createdAtTo?: Date;
    after?: string;
    before?: string;
    limit?: number;
}

/**
 * no description
 */
export class TransactionApi extends BaseAPI {

    /**
     * 取引キャンセル
     * 取引の状態によってはキャンセルができない場合もあります。<a target=\"_blank\" href=\"https://support.mfkessai.co.jp/hc/ja/articles/360008744073-%E5%8F%96%E5%BC%95%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AB\">キャンセルについて</a>を参照してください。
     */
    cancelTransaction = ({ transactionId }: CancelTransactionRequest): Observable<Transaction> => {
        throwIfNullOrUndefined(transactionId, 'cancelTransaction');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'apikey': this.configuration.apiKey('apikey') }), // apikey authentication
        };

        return this.request<Transaction>({
            path: '/transactions/{transaction_id}'.replace('{transaction_id}', encodeURI(transactionId)),
            method: 'DELETE',
            headers,
        });
    };

    /**
     * 取引登録
     * 請求先を指定して取引を登録できます。最長で申請後2営業日以内に審査いたします。<br> Sandbox環境では動作テストのため、任意の審査結果を指定することができます。[マジックナンバーを利用した審査結果の操作](#environment_magic_number)を参照してください。
     */
    createTransaction = ({ payload }: CreateTransactionRequest): Observable<Transaction> => {
        throwIfNullOrUndefined(payload, 'createTransaction');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'apikey': this.configuration.apiKey('apikey') }), // apikey authentication
        };

        return this.request<Transaction>({
            path: '/transactions',
            method: 'POST',
            headers,
            body: payload,
        });
    };

    /**
     * 取引取得
     */
    getTransaction = ({ transactionId }: GetTransactionRequest): Observable<Transaction> => {
        throwIfNullOrUndefined(transactionId, 'getTransaction');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'apikey': this.configuration.apiKey('apikey') }), // apikey authentication
        };

        return this.request<Transaction>({
            path: '/transactions/{transaction_id}'.replace('{transaction_id}', encodeURI(transactionId)),
            method: 'GET',
            headers,
        });
    };

    /**
     * 取引一覧取得
     */
    getTransactionsList = ({ number, customerId, customerNumber, billingId, status, billing, dateFrom, dateTo, createdAtFrom, createdAtTo, after, before, limit }: GetTransactionsListRequest): Observable<TransactionsList> => {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'apikey': this.configuration.apiKey('apikey') }), // apikey authentication
        };

        const query: HttpQuery = {};

        if (number != null) { query['number'] = number; }
        if (customerId != null) { query['customer_id'] = customerId; }
        if (customerNumber != null) { query['customer_number'] = customerNumber; }
        if (billingId != null) { query['billing_id'] = billingId; }
        if (status != null) { query['status'] = status; }
        if (billing != null) { query['billing'] = billing; }
        if (dateFrom != null) { query['date_from'] = (dateFrom as any).toISOString(); }
        if (dateTo != null) { query['date_to'] = (dateTo as any).toISOString(); }
        if (createdAtFrom != null) { query['created_at_from'] = (createdAtFrom as any).toISOString(); }
        if (createdAtTo != null) { query['created_at_to'] = (createdAtTo as any).toISOString(); }
        if (after != null) { query['after'] = after; }
        if (before != null) { query['before'] = before; }
        if (limit != null) { query['limit'] = limit; }

        return this.request<TransactionsList>({
            path: '/transactions',
            method: 'GET',
            headers,
            query,
        });
    };

}

/**
 * @export
 * @enum {string}
 */
export enum GetTransactionsListStatusEnum {
    Unexamined = 'unexamined',
    Passed = 'passed',
    Rejected = 'rejected',
    Canceled = 'canceled'
}
