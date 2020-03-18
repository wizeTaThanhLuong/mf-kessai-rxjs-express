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
 * 顧客審査申請情報です。顧客審査申請で利用します
 * @export
 * @interface CustomerPayloadCustomerExamination
 */
export interface CustomerPayloadCustomerExamination {
    /**
     * 希望与信額です。審査通過の場合に付与される与信枠の金額になります。現在与信枠が適用中の場合は、その与信額以下の金額は指定できません。0円を指定した場合は無視されます。
     * @type {number}
     * @memberof CustomerPayloadCustomerExamination
     */
    amount?: number;
    /**
     * 事業内容です。顧客の主なサービス、商材などを記載してください。
     * @type {string}
     * @memberof CustomerPayloadCustomerExamination
     */
    businessDescription?: string;
    /**
     * 事業所区分です。法人(`corporate`)または、個人(`individual`)で指定してください。不明な場合は空にしてください。
     * @type {string}
     * @memberof CustomerPayloadCustomerExamination
     */
    businessType?: CustomerPayloadCustomerExaminationBusinessTypeEnum;
    /**
     * 法人番号です。事業所区分(`business_type`)が法人(`corporate`)の場合にのみ指定してください。
     * @type {string}
     * @memberof CustomerPayloadCustomerExamination
     */
    corporateNumber?: string;
    /**
     * 顧客審査に利用できるその他情報を記載できます。
     * @type {string}
     * @memberof CustomerPayloadCustomerExamination
     */
    remark?: string;
    /**
     * 代表者氏名です。
     * @type {string}
     * @memberof CustomerPayloadCustomerExamination
     */
    representativeName?: string;
    /**
     * 顧客企業のwebサイトです。
     * @type {string}
     * @memberof CustomerPayloadCustomerExamination
     */
    website?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum CustomerPayloadCustomerExaminationBusinessTypeEnum {
    Corporate = 'corporate',
    Individual = 'individual'
}
