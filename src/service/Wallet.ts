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

import {
  BalanceRequest,
  BurnRequest,
  MintRequest,
  TransferRequest,
  TransferResponse,
  WalletGetRequest,
  WalletImportRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Wallet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get balance of a wallet
   *
   * @tags wallet
   * @name GetBalance
   * @request POST:/wallet/balance
   * @secure
   */
  getBalance = (body: BalanceRequest, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/wallet/balance`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Create wallet
   *
   * @tags wallet
   * @name CreateWallet
   * @request POST:/wallet/create
   * @secure
   */
  createWallet = (body: WalletGetRequest, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/wallet/create`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Mint Token
   *
   * @tags wallet
   * @name Mint
   * @request POST:/wallet/deposit
   * @secure
   */
  mint = (body: MintRequest, params: RequestParams = {}) =>
    this.request<TransferResponse, any>({
      path: `/wallet/deposit`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Import wallet
   *
   * @tags wallet
   * @name ImportWallet
   * @request POST:/wallet/import
   * @secure
   */
  importWallet = (body: WalletImportRequest, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/wallet/import`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Transfer Token
   *
   * @tags wallet
   * @name Transfer
   * @request POST:/wallet/transfer
   * @secure
   */
  transfer = (body: TransferRequest, params: RequestParams = {}) =>
    this.request<TransferResponse, any>({
      path: `/wallet/transfer`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Burn Token
   *
   * @tags wallet
   * @name Burn
   * @request POST:/wallet/withdraw
   * @secure
   */
  burn = (body: BurnRequest, params: RequestParams = {}) =>
    this.request<TransferResponse, any>({
      path: `/wallet/withdraw`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
