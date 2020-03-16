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
 * ページネーション情報です。各Objectの一覧取得の際にリストとともに返却されます。この情報をもとにページ繰りを行うことができます。
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * この一覧に含まれるリソースのうち最後のリソースのIDです。次ページがある場合は、この値をクエリパラメーター`after`に設定することで次ページを取得することができます。
     * @type {string}
     * @memberof Pagination
     */
    end?: string;
    /**
     * 次ページがある場合は`true`、ない場合は`false`が返却されます。
     * @type {boolean}
     * @memberof Pagination
     */
    hasNext?: boolean;
    /**
     * 前ページがある場合は`true`、ない場合は`false`が返却されます。
     * @type {boolean}
     * @memberof Pagination
     */
    hasPrevious?: boolean;
    /**
     * ページ当たりの最大件数です。
     * @type {number}
     * @memberof Pagination
     */
    limit?: number;
    /**
     * この一覧に含まれるリソースのうち最初のリソースのIDです。前ページがある場合は、この値をクエリパラメーター`before`に設定することで前ページを取得することができます。
     * @type {string}
     * @memberof Pagination
     */
    start?: string;
    /**
     * 条件に合致するリソースの全件数です。
     * @type {number}
     * @memberof Pagination
     */
    total?: number | null;
}
