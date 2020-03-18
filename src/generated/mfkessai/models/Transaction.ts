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
    AmountPerTaxRateType,
    BillingCondition,
    InvoiceDeliveryMethod,
    TransactionDetail,
} from './index';

/**
 * 取引です。
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 取引の合計金額です。**税込**金額になります。
     * @type {number}
     * @memberof Transaction
     */
    amount?: number;
    /**
     * 各税率種別毎の**税込**の合計金額です。各税率種別の取引明細行の小計を合計した値に各税率を乗じた値になっています。
     * @type {Array<AmountPerTaxRateType>}
     * @memberof Transaction
     */
    amountsPerTaxRateType?: Array<AmountPerTaxRateType>;
    /**
     * 請求対象であるかをboolean値で表します。`true`の場合請求対象で、`false`の場合は請求対象ではないことを表します。
     * @type {boolean}
     * @memberof Transaction
     */
    billing?: boolean | null;
    /**
     * @type {BillingCondition}
     * @memberof Transaction
     */
    billingCondition?: BillingCondition;
    /**
     * 請求IDです。請求書にまとめられる単位のIDです。同じ請求IDを持つ取引とまとめられて請求書に記載されます。
     * @type {string}
     * @memberof Transaction
     */
    billingId?: string;
    /**
     * 取引がキャンセルされた日時です。未キャンセルの場合は空になります。
     * @type {Date}
     * @memberof Transaction
     */
    canceledAt?: Date | null;
    /**
     * 取引が登録された日時です。
     * @type {Date}
     * @memberof Transaction
     */
    createdAt?: Date;
    /**
     * 請求先IDです。取引の請求先を示します。
     * @type {string}
     * @memberof Transaction
     */
    destinationId?: string;
    /**
     * 取引日です。売り手様と顧客様の間で取引を行った日付です。
     * @type {Date}
     * @memberof Transaction
     */
    date?: Date;
    /**
     * 支払期限です。この日付を超えてMF KESSAIへの入金が確認できない場合は未入金になります。
     * @type {Date}
     * @memberof Transaction
     */
    dueDate?: Date;
    /**
     * 取引IDです。一意の識別子として自動で付与されます。
     * @type {string}
     * @memberof Transaction
     */
    id?: string;
    /**
     * 請求書送付方法です。郵送(posting) またはメール送付(email)のうちから少なくとも１つを指定してください。どちらも選択された場合、どちらの方法でも送付されます。 また、各取引で指定しなかった送付方法でも、請求にまとまった取引のうちでその送付方法を選択しているものがあれば、そちらの送付方法も採用されます。
     * @type {Array<InvoiceDeliveryMethod>}
     * @memberof Transaction
     */
    invoiceDeliveryMethods?: Array<InvoiceDeliveryMethod>;
    /**
     * 請求書発行日です。請求書が発行される日付を指定します。指定した日付が営業日でない場合は翌営業日になります。 また、請求書発送日については<a href=\"https://support.mfkessai.co.jp/hc/ja/articles/360012259673-%E8%AB%8B%E6%B1%82%E6%9B%B8%E7%99%BA%E8%A1%8C%E6%97%A5\" target=\"_blank\">請求書発行日について</a>を参照ください。
     * @type {Date}
     * @memberof Transaction
     */
    issueDate?: Date;
    /**
     * 取引に付与できる任意の取引番号です。MF KESSAIが自動で付与する取引IDとは別で、売り手様が独自に管理する識別子を登録することができます。ただし、売り手様の所有する取引間で一意である必要があります。
     * @type {string}
     * @memberof Transaction
     */
    number?: string;
    /**
     * このObjectの種別を示します。ここでは必ず`transaction`が入ります。
     * @type {string}
     * @memberof Transaction
     */
    object?: TransactionModelObjectEnum;
    /**
     * 取引ステータスです。審査中(`unexamined`)、審査通過(`passed`)、審査否決(`rejected`)、キャンセル済(`canceled`)があります。
     * @type {string}
     * @memberof Transaction
     */
    status?: TransactionStatusEnum;
    /**
     * 取引明細行です。
     * @type {Array<TransactionDetail>}
     * @memberof Transaction
     */
    transactionDetails?: Array<TransactionDetail>;
    /**
     * 取引URIです。すべてのリソースで一意の識別子として自動で付与されます。
     * @type {string}
     * @memberof Transaction
     */
    uri?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum TransactionModelObjectEnum {
    Transaction = 'transaction'
}
/**
 * @export
 * @enum {string}
 */
export enum TransactionStatusEnum {
    Unexamined = 'unexamined',
    Passed = 'passed',
    Rejected = 'rejected',
    Canceled = 'canceled'
}
