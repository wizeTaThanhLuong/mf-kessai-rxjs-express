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
    CustomerPayloadCustomerExamination,
    CustomerPayloadDestination,
} from './index';

/**
 * 顧客登録情報です。顧客登録時に利用します。顧客には必ず一つの請求先が必要であるため同時に請求先一件も登録します。
 * @export
 * @interface CustomerPayload
 */
export interface CustomerPayload {
    /**
     * @type {CustomerPayloadDestination}
     * @memberof CustomerPayload
     */
    destination: CustomerPayloadDestination;
    /**
     * @type {CustomerPayloadCustomerExamination}
     * @memberof CustomerPayload
     */
    customerExamination?: CustomerPayloadCustomerExamination;
    /**
     * 顧客名です。
     * @type {string}
     * @memberof CustomerPayload
     */
    name: string;
    /**
     * 顧客に付与できる任意の顧客番号です。MF KESSAIが発番する顧客IDをとは別で、売り手様が独自に管理する識別子を登録することができます。 ただし、売り手様の所有する顧客間で一意である必要があります。
     * @type {string}
     * @memberof CustomerPayload
     */
    number: string;
}
