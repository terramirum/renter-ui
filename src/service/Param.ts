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

import { ChainsResponse, CoinsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Param<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name Paramchain
   * @summary Existing chains in the system.
   * @request GET:/param/chains
   * @secure
   */
  paramchain = (params: RequestParams = {}) =>
    this.request<ChainsResponse, any>({
      path: `/param/chains`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name Paramcoin
   * @summary Existing chains in the system.
   * @request GET:/param/coins
   * @secure
   */
  paramcoin = (
    query: {
      /** Chain Id */
      chainid: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CoinsResponse, any>({
      path: `/param/coins`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
