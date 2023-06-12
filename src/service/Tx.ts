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

import { BlockDetail, UpdateChainSettle } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Tx<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name Transactionblock
   * @summary Getting transaction by Tx Hash and Chain Id.
   * @request GET:/tx/block
   * @secure
   */
  transactionblock = (
    query: {
      /** Block number */
      current: string;
      /** chain id */
      chainid: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<BlockDetail, any>({
      path: `/tx/block`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name Transactiondetail
   * @summary Getting transaction by Tx Hash and Chain Id.
   * @request GET:/tx/detail
   * @secure
   */
  transactiondetail = (
    query: {
      /** Transaction Hash */
      txhash: string;
      /** Chain Id */
      chainid: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<UpdateChainSettle, any>({
      path: `/tx/detail`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
