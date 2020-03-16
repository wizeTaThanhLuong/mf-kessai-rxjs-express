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
    CustomerExamination,
    Pagination,
} from './';

/**
 * @export
 * @interface CustomerExaminationsList
 */
export interface CustomerExaminationsList {
    /**
     * 顧客審査一覧です。
     * @type {Array<CustomerExamination>}
     * @memberof CustomerExaminationsList
     */
    items?: Array<CustomerExamination>;
    /**
     * このObjectの種別を示します。ここでは必ず `list`が設定されます。
     * @type {string}
     * @memberof CustomerExaminationsList
     */
    object?: CustomerExaminationsListModelObjectEnum;
    /**
     * @type {Pagination}
     * @memberof CustomerExaminationsList
     */
    pagination?: Pagination;
}

/**
 * @export
 * @enum {string}
 */
export enum CustomerExaminationsListModelObjectEnum {
    List = 'list'
}

