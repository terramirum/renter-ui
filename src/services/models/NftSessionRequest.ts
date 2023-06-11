/**
 * Blockchain wrapper APIs.
 * the purpose of this application is to provide an application that makes all kind of blockchain operations more and more easier and chain agnostic.  Is is a multi-tenant application that can be used by multi client or tenant. Each client can create user\'s wallet and public address by given key like tenant id and user id. System store users private key securely under hsm key or mpc wallet.  Tanent can perform various blockchain operation such as contract create, contract verify, burn, mint, transfer and so on. In summary, this multi-tenant application provides a secure environment for tenants to manage their digital assets on specific blockchains, with the added security of a custody wallet system that stores private keys under HSM key and MPC wallet.  This should demonstrate all the possible comment annotations that are available to turn go code into a fully compliant swagger 2.0 spec
 *
 * OpenAPI spec version: 0.0.1
 * Contact: e.mersinli@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class NftSessionRequest {
    /**
    * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
    */
    'chainId': string;
    /**
    * The NFT short name of the asset.
    */
    'currency': string;
    /**
    * Nft Id given by randomly but it must be unique.
    */
    'nftId': string;
    /**
    * Renter address. Only nft owner can rent.
    */
    'renter': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "nftId",
            "baseName": "nftId",
            "type": "string",
            "format": ""
        },
        {
            "name": "renter",
            "baseName": "renter",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NftSessionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

