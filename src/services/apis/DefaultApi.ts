// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BlockDetail } from '../models/BlockDetail';
import { ChainsResponse } from '../models/ChainsResponse';
import { CoinsResponse } from '../models/CoinsResponse';
import { NftClassResponse } from '../models/NftClassResponse';
import { NftDetailResponse } from '../models/NftDetailResponse';
import { NftRenterResponse } from '../models/NftRenterResponse';
import { NftSessionResponse } from '../models/NftSessionResponse';
import { UpdateChainSettle } from '../models/UpdateChainSettle';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Existing chains in the system.
     */
    public async paramchain(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/param/chains';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Existing chains in the system.
     * @param chainid Chain Id
     */
    public async paramcoin(chainid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chainid' is not null or undefined
        if (chainid === null || chainid === undefined) {
            throw new RequiredError("DefaultApi", "paramcoin", "chainid");
        }


        // Path Params
        const localVarPath = '/param/coins';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (chainid !== undefined) {
            requestContext.setQueryParam("chainid", ObjectSerializer.serialize(chainid, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Ping
     */
    public async ping(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/ping';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Getting class of the contract owner
     * @param chainid Chain id
     * @param contractowner contract owner
     */
    public async rentalclasses(chainid: string, contractowner: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chainid' is not null or undefined
        if (chainid === null || chainid === undefined) {
            throw new RequiredError("DefaultApi", "rentalclasses", "chainid");
        }


        // verify required parameter 'contractowner' is not null or undefined
        if (contractowner === null || contractowner === undefined) {
            throw new RequiredError("DefaultApi", "rentalclasses", "contractowner");
        }


        // Path Params
        const localVarPath = '/rental/classes';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (chainid !== undefined) {
            requestContext.setQueryParam("chainid", ObjectSerializer.serialize(chainid, "string", ""));
        }

        // Query Params
        if (contractowner !== undefined) {
            requestContext.setQueryParam("contractowner", ObjectSerializer.serialize(contractowner, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Getting nfts of the class
     * @param chainid Chain id
     * @param classid Class id
     */
    public async rentalnfts(chainid: string, classid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chainid' is not null or undefined
        if (chainid === null || chainid === undefined) {
            throw new RequiredError("DefaultApi", "rentalnfts", "chainid");
        }


        // verify required parameter 'classid' is not null or undefined
        if (classid === null || classid === undefined) {
            throw new RequiredError("DefaultApi", "rentalnfts", "classid");
        }


        // Path Params
        const localVarPath = '/rental/nfts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (chainid !== undefined) {
            requestContext.setQueryParam("chainid", ObjectSerializer.serialize(chainid, "string", ""));
        }

        // Query Params
        if (classid !== undefined) {
            requestContext.setQueryParam("classid", ObjectSerializer.serialize(classid, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Getting renters
     * @param classid Class id of the nft
     * @param currency Currency of the class
     * @param nftid nft id
     * @param sessionid renter
     */
    public async rentalrenters(classid: string, currency: string, nftid: string, sessionid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'classid' is not null or undefined
        if (classid === null || classid === undefined) {
            throw new RequiredError("DefaultApi", "rentalrenters", "classid");
        }


        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new RequiredError("DefaultApi", "rentalrenters", "currency");
        }


        // verify required parameter 'nftid' is not null or undefined
        if (nftid === null || nftid === undefined) {
            throw new RequiredError("DefaultApi", "rentalrenters", "nftid");
        }


        // verify required parameter 'sessionid' is not null or undefined
        if (sessionid === null || sessionid === undefined) {
            throw new RequiredError("DefaultApi", "rentalrenters", "sessionid");
        }


        // Path Params
        const localVarPath = '/rental/renters';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (classid !== undefined) {
            requestContext.setQueryParam("classid", ObjectSerializer.serialize(classid, "string", ""));
        }

        // Query Params
        if (currency !== undefined) {
            requestContext.setQueryParam("currency", ObjectSerializer.serialize(currency, "string", ""));
        }

        // Query Params
        if (nftid !== undefined) {
            requestContext.setQueryParam("nftid", ObjectSerializer.serialize(nftid, "string", ""));
        }

        // Query Params
        if (sessionid !== undefined) {
            requestContext.setQueryParam("sessionid", ObjectSerializer.serialize(sessionid, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Getting session
     * @param chainid Class id of the nft
     * @param currency Currency of the class
     * @param nftid nft id
     * @param renter renter
     */
    public async rentalsessions(chainid: string, currency: string, nftid: string, renter: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chainid' is not null or undefined
        if (chainid === null || chainid === undefined) {
            throw new RequiredError("DefaultApi", "rentalsessions", "chainid");
        }


        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new RequiredError("DefaultApi", "rentalsessions", "currency");
        }


        // verify required parameter 'nftid' is not null or undefined
        if (nftid === null || nftid === undefined) {
            throw new RequiredError("DefaultApi", "rentalsessions", "nftid");
        }


        // verify required parameter 'renter' is not null or undefined
        if (renter === null || renter === undefined) {
            throw new RequiredError("DefaultApi", "rentalsessions", "renter");
        }


        // Path Params
        const localVarPath = '/rental/sessions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (chainid !== undefined) {
            requestContext.setQueryParam("chainid", ObjectSerializer.serialize(chainid, "string", ""));
        }

        // Query Params
        if (currency !== undefined) {
            requestContext.setQueryParam("currency", ObjectSerializer.serialize(currency, "string", ""));
        }

        // Query Params
        if (nftid !== undefined) {
            requestContext.setQueryParam("nftid", ObjectSerializer.serialize(nftid, "string", ""));
        }

        // Query Params
        if (renter !== undefined) {
            requestContext.setQueryParam("renter", ObjectSerializer.serialize(renter, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Getting transaction by Tx Hash and Chain Id.
     * @param current Block number
     * @param chainid chain id
     */
    public async transactionblock(current: string, chainid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'current' is not null or undefined
        if (current === null || current === undefined) {
            throw new RequiredError("DefaultApi", "transactionblock", "current");
        }


        // verify required parameter 'chainid' is not null or undefined
        if (chainid === null || chainid === undefined) {
            throw new RequiredError("DefaultApi", "transactionblock", "chainid");
        }


        // Path Params
        const localVarPath = '/tx/block';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (current !== undefined) {
            requestContext.setQueryParam("current", ObjectSerializer.serialize(current, "string", ""));
        }

        // Query Params
        if (chainid !== undefined) {
            requestContext.setQueryParam("chainid", ObjectSerializer.serialize(chainid, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Getting transaction by Tx Hash and Chain Id.
     * @param txhash Transaction Hash
     * @param chainid Chain Id
     */
    public async transactiondetail(txhash: string, chainid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'txhash' is not null or undefined
        if (txhash === null || txhash === undefined) {
            throw new RequiredError("DefaultApi", "transactiondetail", "txhash");
        }


        // verify required parameter 'chainid' is not null or undefined
        if (chainid === null || chainid === undefined) {
            throw new RequiredError("DefaultApi", "transactiondetail", "chainid");
        }


        // Path Params
        const localVarPath = '/tx/detail';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (txhash !== undefined) {
            requestContext.setQueryParam("txhash", ObjectSerializer.serialize(txhash, "string", ""));
        }

        // Query Params
        if (chainid !== undefined) {
            requestContext.setQueryParam("chainid", ObjectSerializer.serialize(chainid, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to paramchain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async paramchain(response: ResponseContext): Promise<ChainsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ChainsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChainsResponse", ""
            ) as ChainsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ChainsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChainsResponse", ""
            ) as ChainsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to paramcoin
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async paramcoin(response: ResponseContext): Promise<CoinsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CoinsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CoinsResponse", ""
            ) as CoinsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CoinsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CoinsResponse", ""
            ) as CoinsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ping
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ping(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rentalclasses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rentalclasses(response: ResponseContext): Promise<NftClassResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NftClassResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NftClassResponse", ""
            ) as NftClassResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NftClassResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NftClassResponse", ""
            ) as NftClassResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rentalnfts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rentalnfts(response: ResponseContext): Promise<NftDetailResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NftDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NftDetailResponse", ""
            ) as NftDetailResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NftDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NftDetailResponse", ""
            ) as NftDetailResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rentalrenters
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rentalrenters(response: ResponseContext): Promise<NftRenterResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NftRenterResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NftRenterResponse", ""
            ) as NftRenterResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NftRenterResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NftRenterResponse", ""
            ) as NftRenterResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rentalsessions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rentalsessions(response: ResponseContext): Promise<NftSessionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NftSessionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NftSessionResponse", ""
            ) as NftSessionResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NftSessionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NftSessionResponse", ""
            ) as NftSessionResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to transactionblock
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async transactionblock(response: ResponseContext): Promise<BlockDetail > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlockDetail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockDetail", ""
            ) as BlockDetail;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BlockDetail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockDetail", ""
            ) as BlockDetail;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to transactiondetail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async transactiondetail(response: ResponseContext): Promise<UpdateChainSettle > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateChainSettle = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateChainSettle", ""
            ) as UpdateChainSettle;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateChainSettle = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateChainSettle", ""
            ) as UpdateChainSettle;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
