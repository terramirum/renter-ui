/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { HttpClient, RequestParams } from "./http-client";

export class Ping<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Ping
   *
   * @name Ping
   * @request GET:/ping
   * @secure
   */
  ping = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/ping`,
      method: "GET",
      secure: true,
      ...params,
    });
}
