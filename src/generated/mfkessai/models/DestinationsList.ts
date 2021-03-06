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
    Destination,
    Pagination,
} from './index';

/**
 * @export
 * @interface DestinationsList
 */
export interface DestinationsList {
    /**
     * 請求先一覧です。
     * @type {Array<Destination>}
     * @memberof DestinationsList
     */
    items?: Array<Destination>;
    /**
     * このObjectの種別を示します。ここでは必ず `list`が設定されます。
     * @type {string}
     * @memberof DestinationsList
     */
    object?: DestinationsListModelObjectEnum;
    /**
     * @type {Pagination}
     * @memberof DestinationsList
     */
    pagination?: Pagination;
}

/**
 * @export
 * @enum {string}
 */
export enum DestinationsListModelObjectEnum {
    List = 'list'
}

