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
    DeductionTax,
    DeductionTaxFree,
    DeductionTaxable,
    DeductionUntaxable,
} from './index';

/**
 * 振込から控除される金額とその内訳です。
 * @export
 * @interface Deduction
 */
export interface Deduction {
    /**
     * 債権合計額から控除される合計金額です。
     * @type {number}
     * @memberof Deduction
     */
    amount?: number | null;
    /**
     * 入金消込の解除による回収金額の返金額です。
     * @type {number}
     * @memberof Deduction
     */
    canceledReconciliationAmount?: number | null;
    /**
     * キャンセルによる債権金額の返金額です。
     * @type {number}
     * @memberof Deduction
     */
    returnedCreditAmount?: number | null;
    /**
     * @type {DeductionTax}
     * @memberof Deduction
     */
    tax?: DeductionTax;
    /**
     * @type {DeductionTaxable}
     * @memberof Deduction
     */
    taxable?: DeductionTaxable;
    /**
     * @type {DeductionTaxFree}
     * @memberof Deduction
     */
    taxFree?: DeductionTaxFree;
    /**
     * @type {DeductionUntaxable}
     * @memberof Deduction
     */
    untaxable?: DeductionUntaxable;
}