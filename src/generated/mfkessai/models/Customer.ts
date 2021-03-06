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
    PaymentMethod,
} from './index';

/**
 * 顧客です。取引登録や与信枠取得などあらゆる機能を利用する起点となります。
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     * 顧客が登録された日時を示します。
     * @type {Date}
     * @memberof Customer
     */
    createdAt?: Date;
    /**
     * 未入金アラートの有無を示します。未入金アラートがある場合は`true`、ない場合は`false`を返します。未入金アラートがあると、自動で毎月付与されている与信枠が停止します。
     * @type {boolean}
     * @memberof Customer
     */
    hasAlert?: boolean;
    /**
     * 顧客IDです。 MF KESSAIによって発番される一意の識別子です。
     * @type {string}
     * @memberof Customer
     */
    id?: string;
    /**
     * 顧客名です。
     * @type {string}
     * @memberof Customer
     */
    name?: string;
    /**
     * 顧客に付与できる任意の顧客番号です。自動で付与される顧客IDとは別に、売り手様が独自に管理する識別子を登録することができます。ただし、売り手様の管理される顧客間で一意でなければなりません。
     * @type {string}
     * @memberof Customer
     */
    number?: string;
    /**
     * このObjectの種別を示します。ここでは必ず`customer`が入ります。
     * @type {string}
     * @memberof Customer
     */
    object?: CustomerModelObjectEnum;
    /**
     * @type {PaymentMethod}
     * @memberof Customer
     */
    paymentMethod?: PaymentMethod;
    /**
     * 顧客URIです。すべてのリソースで一意の識別子として自動で付与されます。
     * @type {string}
     * @memberof Customer
     */
    uri?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum CustomerModelObjectEnum {
    Customer = 'customer'
}

