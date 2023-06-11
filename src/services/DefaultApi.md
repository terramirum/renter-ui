# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paramchain**](DefaultApi.md#paramchain) | **GET** /param/chains | Existing chains in the system.
[**paramcoin**](DefaultApi.md#paramcoin) | **GET** /param/coins | Existing chains in the system.
[**ping**](DefaultApi.md#ping) | **GET** /ping | 
[**rentalclasses**](DefaultApi.md#rentalclasses) | **GET** /rental/classes | 
[**rentalnfts**](DefaultApi.md#rentalnfts) | **GET** /rental/nfts | 
[**rentalrenters**](DefaultApi.md#rentalrenters) | **GET** /rental/renters | 
[**rentalsessions**](DefaultApi.md#rentalsessions) | **GET** /rental/sessions | 
[**transactionblock**](DefaultApi.md#transactionblock) | **GET** /tx/block | Getting transaction by Tx Hash and Chain Id.
[**transactiondetail**](DefaultApi.md#transactiondetail) | **GET** /tx/detail | Getting transaction by Tx Hash and Chain Id.


# **paramchain**
> ChainsResponse paramchain()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.paramchain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ChainsResponse**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ChainsResponse |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **paramcoin**
> CoinsResponse paramcoin()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiParamcoinRequest = {
  // string | Chain Id
  chainid: "chainid_example",
};

apiInstance.paramcoin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainid** | [**string**] | Chain Id | defaults to undefined


### Return type

**CoinsResponse**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CoinsResponse |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ping**
> void ping()

Ping

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.ping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rentalclasses**
> NftClassResponse rentalclasses()

Getting class of the contract owner

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiRentalclassesRequest = {
  // string | Chain id
  chainid: "chainid_example",
  // string | contract owner
  contractowner: "contractowner_example",
};

apiInstance.rentalclasses(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainid** | [**string**] | Chain id | defaults to undefined
 **contractowner** | [**string**] | contract owner | defaults to undefined


### Return type

**NftClassResponse**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | NftClassResponse |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rentalnfts**
> NftDetailResponse rentalnfts()

Getting nfts of the class

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiRentalnftsRequest = {
  // string | Chain id
  chainid: "chainid_example",
  // string | Class id
  classid: "classid_example",
};

apiInstance.rentalnfts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainid** | [**string**] | Chain id | defaults to undefined
 **classid** | [**string**] | Class id | defaults to undefined


### Return type

**NftDetailResponse**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | NftDetailResponse |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rentalrenters**
> NftRenterResponse rentalrenters()

Getting renters

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiRentalrentersRequest = {
  // string | Class id of the nft
  classid: "classid_example",
  // string | Currency of the class
  currency: "currency_example",
  // string | nft id
  nftid: "nftid_example",
  // string | renter
  sessionid: "sessionid_example",
};

apiInstance.rentalrenters(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classid** | [**string**] | Class id of the nft | defaults to undefined
 **currency** | [**string**] | Currency of the class | defaults to undefined
 **nftid** | [**string**] | nft id | defaults to undefined
 **sessionid** | [**string**] | renter | defaults to undefined


### Return type

**NftRenterResponse**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | NftRenterResponse |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rentalsessions**
> NftSessionResponse rentalsessions()

Getting session

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiRentalsessionsRequest = {
  // string | Class id of the nft
  chainid: "chainid_example",
  // string | Currency of the class
  currency: "currency_example",
  // string | nft id
  nftid: "nftid_example",
  // string | renter
  renter: "renter_example",
};

apiInstance.rentalsessions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainid** | [**string**] | Class id of the nft | defaults to undefined
 **currency** | [**string**] | Currency of the class | defaults to undefined
 **nftid** | [**string**] | nft id | defaults to undefined
 **renter** | [**string**] | renter | defaults to undefined


### Return type

**NftSessionResponse**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | NftSessionResponse |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transactionblock**
> BlockDetail transactionblock()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTransactionblockRequest = {
  // string | Block number
  current: "current_example",
  // string | chain id
  chainid: "chainid_example",
};

apiInstance.transactionblock(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current** | [**string**] | Block number | defaults to undefined
 **chainid** | [**string**] | chain id | defaults to undefined


### Return type

**BlockDetail**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | BlockDetail |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transactiondetail**
> UpdateChainSettle transactiondetail()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTransactiondetailRequest = {
  // string | Transaction Hash
  txhash: "txhash_example",
  // string | Chain Id
  chainid: "chainid_example",
};

apiInstance.transactiondetail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txhash** | [**string**] | Transaction Hash | defaults to undefined
 **chainid** | [**string**] | Chain Id | defaults to undefined


### Return type

**UpdateChainSettle**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | UpdateChainSettle |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


