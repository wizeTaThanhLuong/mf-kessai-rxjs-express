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
 * コンビニ払込手数料とその内訳です。
 * @export
 * @interface DeductionTaxableConvenienceBilling
 */
export interface DeductionTaxableConvenienceBilling {
    /**
     * コンビニ払込手数料です。
     * @type {number}
     * @memberof DeductionTaxableConvenienceBilling
     */
    charge?: number | null;
    /**
     * コンビニ払込件数です。
     * @type {number}
     * @memberof DeductionTaxableConvenienceBilling
     */
    quantity?: number | null;
    /**
     * コンビニ払込１件あたりの手数料です。
     * @type {number}
     * @memberof DeductionTaxableConvenienceBilling
     */
    unitPrice?: number | null;
}