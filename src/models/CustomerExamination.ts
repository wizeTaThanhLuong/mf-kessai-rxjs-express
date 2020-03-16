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
 * 顧客審査です。顧客に対する与信枠取得のために利用します。申請後２営業日以内に審査いたします。自動顧客審査を利用している場合は顧客登録と同時に顧客審査も申請されます。
 * @export
 * @interface CustomerExamination
 */
export interface CustomerExamination {
    /**
     * 都道府県・市区町村・番地です。必ず都道府県名から始めてください。
     * @type {string}
     * @memberof CustomerExamination
     */
    address1?: string;
    /**
     * 建物名・部屋番号などです。
     * @type {string}
     * @memberof CustomerExamination
     */
    address2?: string;
    /**
     * 希望与信額です。審査通過の場合に付与される与信枠の金額になります。
     * @type {number}
     * @memberof CustomerExamination
     */
    amount?: number;
    /**
     * 事業内容です。顧客の主なサービス、商材などです。
     * @type {string}
     * @memberof CustomerExamination
     */
    businessDescription?: string;
    /**
     * 事業所区分です。法人(`corporate`)または、個人(`individual`)で指定されます。不明な場合は空になります。
     * @type {string}
     * @memberof CustomerExamination
     */
    businessType?: CustomerExaminationBusinessTypeEnum;
    /**
     * 法人番号です。事業所区分(`business_type`)が法人(`corporate`)の場合にのみ指定されます。
     * @type {string}
     * @memberof CustomerExamination
     */
    corporateNumber?: string;
    /**
     * 顧客審査の申請日時です。
     * @type {Date}
     * @memberof CustomerExamination
     */
    createdAt?: Date;
    /**
     * 顧客IDです。一意の識別子として自動で付与されます。
     * @type {string}
     * @memberof CustomerExamination
     */
    customerId?: string;
    /**
     * メールアドレスです。email形式で指定してください。
     * @type {string}
     * @memberof CustomerExamination
     */
    email?: string;
    /**
     * 希望取引登録期間終了日です。この日付まで対象の与信枠を利用して取引登録ができます。
     * @type {Date}
     * @memberof CustomerExamination
     */
    endDate?: Date;
    /**
     * 顧客審査IDです。一意の識別子として自動で付与されます。
     * @type {string}
     * @memberof CustomerExamination
     */
    id?: string;
    /**
     * その他情報です。審査に利用できる情報を記載できます。
     * @type {string}
     * @memberof CustomerExamination
     */
    remark?: string;
    /**
     * 代表者名です。
     * @type {string}
     * @memberof CustomerExamination
     */
    representativeName?: string;
    /**
     * 希望取引登録期間開始日。この日付から対象の与信枠を利用して取引登録ができます。 手動での申請の場合、審査通過日となるため空で返却されます。自動顧客審査による申請の場合は、月次での与信枠付与になり対象月の月初日となります。
     * @type {Date}
     * @memberof CustomerExamination
     */
    startDate?: Date | null;
    /**
     * 顧客審査ステータスです。審査中(`unexamined`)、審査通過(`passed`)、審査否決(`rejected`)があります。審査通過の場合には与信枠が付与されています。
     * @type {string}
     * @memberof CustomerExamination
     */
    status?: CustomerExaminationStatusEnum;
    /**
     * 電話番号です。ハイフン有無は任意になります。
     * @type {string}
     * @memberof CustomerExamination
     */
    tel?: string;
    /**
     * このObjectの種別を示します。ここでは必ず`customer_examination`が入ります。
     * @type {string}
     * @memberof CustomerExamination
     */
    object?: CustomerExaminationModelObjectEnum;
    /**
     * 顧客審査URIです。すべてのリソースで一意の識別子として自動で付与されます。
     * @type {string}
     * @memberof CustomerExamination
     */
    uri?: string;
    /**
     * 顧客企業のwebサイトです。
     * @type {string}
     * @memberof CustomerExamination
     */
    website?: string;
    /**
     * 郵便番号です。ハイフン有無は任意になります。但しハイフン無しで登録されますと、請求書にもハイフン無しで記載されます。
     * @type {string}
     * @memberof CustomerExamination
     */
    zipCode?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum CustomerExaminationBusinessTypeEnum {
    Corporate = 'corporate',
    Individual = 'individual'
}
/**
 * @export
 * @enum {string}
 */
export enum CustomerExaminationStatusEnum {
    Unexamined = 'unexamined',
    Passed = 'passed',
    Rejected = 'rejected'
}
/**
 * @export
 * @enum {string}
 */
export enum CustomerExaminationModelObjectEnum {
    CustomerExamination = 'customer_examination'
}

