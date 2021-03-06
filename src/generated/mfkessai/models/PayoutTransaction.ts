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

/**
 * 売り手様へ振込に紐づく債権です。
 * @export
 * @interface PayoutTransaction
 */
export interface PayoutTransaction {
    /**
     * 債権譲受日時です。
     * @type {Date}
     * @memberof PayoutTransaction
     */
    acceptedAt?: Date;
    /**
     * 債権金額です。
     * @type {number}
     * @memberof PayoutTransaction
     */
    amount?: number;
    /**
     * 手数料の金額です。
     * @type {number}
     * @memberof PayoutTransaction
     */
    commissionAmount?: number | null;
    /**
     * 手数料率です。
     * @type {number}
     * @memberof PayoutTransaction
     */
    commissionRate?: number | null;
    /**
     * 早期振込手数料です。
     * @type {number}
     * @memberof PayoutTransaction
     */
    earlyPayoutCommissionAmount?: number | null;
    /**
     * 早期振込手数料率です。
     * @type {number}
     * @memberof PayoutTransaction
     */
    earlyPayoutCommissionRate?: number | null;
    /**
     * 債権IDです。一意の識別子として自動で付与されます。
     * @type {string}
     * @memberof PayoutTransaction
     */
    id?: string;
    /**
     * このObjectの種別を示します。ここでは必ず`payout_transaction`が入ります。
     * @type {string}
     * @memberof PayoutTransaction
     */
    object?: PayoutTransactionModelObjectEnum;
    /**
     * 振込予定日です。早期振込の場合、`standard_payout_date`よりも早くなります。
     * @type {Date}
     * @memberof PayoutTransaction
     */
    payoutDate?: Date;
    /**
     * 債権が含まれる振込のIDです。
     * @type {string}
     * @memberof PayoutTransaction
     */
    payoutId?: string;
    /**
     * 通常の振込予定日です。
     * @type {Date}
     * @memberof PayoutTransaction
     */
    standardPayoutDate?: Date;
    /**
     * 取引IDです。この債権が紐づく取引を示します。
     * @type {string}
     * @memberof PayoutTransaction
     */
    transactionId?: string;
    /**
     * 債権URIです。すべてのリソースで一意の識別子として自動で付与されます。
     * @type {string}
     * @memberof PayoutTransaction
     */
    uri?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum PayoutTransactionModelObjectEnum {
    PayoutTransaction = 'payout_transaction'
}

