import { Observable, of } from 'rxjs';
import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax';
import { map, concatMap } from 'rxjs/operators';

// tslint:disable-next-line:no-var-requires
const ua = require('default-user-agent');
// tslint:disable-next-line:no-var-requires
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

export interface IRestResponse<T> extends AjaxResponse {
  response: T | null;
}

export type TJson = any;
export type THttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type THttpHeaders = { [key: string]: string };
export type THttpQueryParams = string | number | null | boolean;
export type THttpQuery = Partial<{ [key: string]: THttpQueryParams | THttpQueryParams[] }>;
export type THttpBody = TJson | FormData;

export interface IRequestOptions {
  path: string;
  method: THttpMethod;
  headers?: THttpHeaders;
  query?: THttpQuery;
  body?: THttpBody;
  responseType?: 'json' | 'blob' | 'arraybuffer' | 'text';
}

export const encodeURI = (value: any) => encodeURIComponent(String(value));

const queryString = (params: THttpQuery): string => Object.keys(params)
  .map((key) => {
    const value = params[key];
    return (value instanceof Array)
      ? value.map((val) => `${encodeURI(key)}=${encodeURI(val)}`).join('&')
      : `${encodeURI(key)}=${encodeURI(value)}`;
  })
  .join('&');

export interface ConfigurationParameters {
  userAgent?: string;
  basePath?: string;
  headers?: THttpHeaders;
  middleware?: Middleware[]
  apiKey?: string;
}

export default class Client {
  private readonly userAgent: string;
  private readonly basePath: string;
  private readonly headers?: THttpHeaders;
  private middleware: Middleware[];

  constructor(configuration: ConfigurationParameters) {
    this.userAgent = configuration.userAgent || ua(process.env.npm_package_name, process.env.npm_package_version);
    this.basePath = configuration.basePath || '';
    this.headers = configuration.headers;
    this.middleware = configuration.middleware || [];
  }

  private getURL(uri: string): string {
    return this.basePath + uri.replace(/^\//, '');
  }

  withMiddleware = (middleware: Middleware[]) => {
    const next = this.clone();
    next.middleware = next.middleware.concat(middleware);
    return next;
  };

  withPreMiddleware = (preMiddleware: Middleware['pre'][]) =>
    this.withMiddleware(preMiddleware.map((pre) => ({ pre })));

  withPostMiddleware = (postMiddleware: Middleware['post'][]) =>
    this.withMiddleware(postMiddleware.map((post) => ({ post })));

  request = <T>(requestOpts: IRequestOptions): Observable<IRestResponse<T>> =>
    this.rxjsRequest(this.createAjaxRequest(requestOpts)).pipe(map(res => res as IRestResponse<T>));

  private createAjaxRequest = (requestOpts: IRequestOptions): AjaxRequest => {
    let url = this.getURL(requestOpts.path);
    if (requestOpts.query !== undefined && Object.keys(requestOpts.query).length !== 0) {
      url += '?' + queryString(requestOpts.query);
    }

    return {
      url,
      method: requestOpts.method,
      headers: Object.assign({}, this.headers, requestOpts.headers),
      body: requestOpts.body instanceof FormData ? requestOpts.body : JSON.stringify(requestOpts.body),
      responseType: requestOpts.responseType || 'json',
      withCredentials: false,
      createXHR: () => new XMLHttpRequest(),
    };
  };

  private rxjsRequest = (params: AjaxRequest): Observable<AjaxResponse> =>
    of(params).pipe(
      map((request) => {
        this.middleware.filter((item) => item.pre).forEach((mw) => (request = mw.pre!(request)));
        return request;
      }),
      concatMap((args) =>
        ajax(args).pipe(
          map((response) => {
            this.middleware.filter((item) => item.post).forEach((mw) => (response = mw.post!(response)));
            return response;
          })
        )
      )
    );

  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  private clone = (): Client =>
    Object.assign(Object.create(Object.getPrototypeOf(this)), this);
}

export interface Middleware {
  pre?(request: AjaxRequest): AjaxRequest;
  post?(response: AjaxResponse): AjaxResponse;
}
