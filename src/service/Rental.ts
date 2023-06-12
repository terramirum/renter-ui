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
  NftAccessRequest,
  NftClassResponse,
  NftDetailResponse,
  NftGiveAccessRequest,
  NftRenterResponse,
  NftRentMintRequest,
  NftSessionResponse,
  TransferResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Rental<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Getting class of the contract owner
   *
   * @name Rentalclasses
   * @request GET:/rental/classes
   * @secure
   */
  rentalclasses = (
    query: {
      /** Chain id */
      chainid: string;
      /** contract owner */
      contractowner: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftClassResponse, any>({
      path: `/rental/classes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Transfer Token
   *
   * @tags rent
   * @name NftAccessRequest
   * @request POST:/rental/nftaccess
   * @secure
   */
  nftAccessRequest = (body: NftAccessRequest, params: RequestParams = {}) =>
    this.request<TransferResponse, any>({
      path: `/rental/nftaccess`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Transfer Token
   *
   * @tags rent
   * @name NftGiveAccessRequest
   * @request POST:/rental/nftgiveaccess
   * @secure
   */
  nftGiveAccessRequest = (body: NftGiveAccessRequest, params: RequestParams = {}) =>
    this.request<TransferResponse, any>({
      path: `/rental/nftgiveaccess`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Getting nfts of the class
   *
   * @name Rentalnfts
   * @request GET:/rental/nfts
   * @secure
   */
  rentalnfts = (
    query: {
      /** Chain id */
      chainid: string;
      /** Class id */
      classid: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftDetailResponse, any>({
      path: `/rental/nfts`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Getting renters
   *
   * @name Rentalrenters
   * @request GET:/rental/renters
   * @secure
   */
  rentalrenters = (
    query: {
      /** Class id of the nft */
      classid: string;
      /** Currency of the class */
      currency: string;
      /** nft id */
      nftid: string;
      /** renter */
      sessionid: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftRenterResponse, any>({
      path: `/rental/renters`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Contract owner can mint a date for a specific renter
   *
   * @tags rent
   * @name NftRentMintRequest
   * @request POST:/rental/rentnftmint
   * @secure
   */
  nftRentMintRequest = (body: NftRentMintRequest, params: RequestParams = {}) =>
    this.request<TransferResponse, any>({
      path: `/rental/rentnftmint`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Getting session
   *
   * @name Rentalsessions
   * @request GET:/rental/sessions
   * @secure
   */
  rentalsessions = (
    query: {
      /** Class id of the nft */
      chainid: string;
      /** Currency of the class */
      currency: string;
      /** nft id */
      nftid: string;
      /** renter */
      renter: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftSessionResponse, any>({
      path: `/rental/sessions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
