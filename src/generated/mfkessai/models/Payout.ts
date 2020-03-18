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

import {
    Deduction,
} from './index';

/**
 * MFKESSAIから売り手様への金額確定済みの振込です。
 * @export
 * @interface Payout
 */
export interface Payout {
    /**
     * 振込金額です。
     * @type {number}
     * @memberof Payout
     */
    amount?: number;
    /**
     * 振込の対象となる回収金額です。
     * @type {number}
     * @memberof Payout
     */
    collectedAmount?: number | null;
    /**
     * @type {Deduction}
     * @memberof Payout
     */
    deduction?: Deduction;
    /**
     * 振込IDです。一意の識別子として自動で付与されます。
     * @type {string}
     * @memberof Payout
     */
    id?: string;
    /**
     * このObjectの種別を示します。ここでは必ず`payout`が入ります。
     * @type {string}
     * @memberof Payout
     */
    object?: PayoutModelObjectEnum;
    /**
     * 振込予定日です。
     * @type {Date}
     * @memberof Payout
     */
    payoutDate?: Date;
    /**
     * 振込の対象となる債権金額です。
     * @type {number}
     * @memberof Payout
     */
    receivablesAmount?: number | null;
    /**
     * 振込ステータスです。振込手続中(`in_progress`)、振込完了(`completed`)があります。
     * @type {string}
     * @memberof Payout
     */
    status?: PayoutStatusEnum;
    /**
     * 振込種別です。通常振込(`normal`)、早期振込(`early`)があります。
     * @type {string}
     * @memberof Payout
     */
    type?: PayoutTypeEnum;
    /**
     * 振込URIです。すべてのリソースで一意の識別子として自動で付与されます。
     * @type {string}
     * @memberof Payout
     */
    uri?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum PayoutModelObjectEnum {
    Payout = 'payout'
}
/**
 * @export
 * @enum {string}
 */
export enum PayoutStatusEnum {
    InProgress = 'in_progress',
    Completed = 'completed'
}
/**
 * @export
 * @enum {string}
 */
export enum PayoutTypeEnum {
    Normal = 'normal',
    Early = 'early'
}
