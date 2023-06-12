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

import { DeployRequest, DeployResponse, VerifyContractRequest, VerifyContractResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Contract<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Contract deploy or store
   *
   * @tags contract
   * @name Contractstore
   * @request POST:/contract/deploy
   * @secure
   */
  contractstore = (body: DeployRequest, params: RequestParams = {}) =>
    this.request<DeployResponse, any>({
      path: `/contract/deploy`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Contract deploy or store
   *
   * @tags contract
   * @name Contractverify
   * @request POST:/contract/verify
   * @secure
   */
  contractverify = (body: VerifyContractRequest, params: RequestParams = {}) =>
    this.request<VerifyContractResponse, any>({
      path: `/contract/verify`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
