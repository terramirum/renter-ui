# .RentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nftAccessRequest**](RentApi.md#nftAccessRequest) | **POST** /rental/nftaccess | 
[**nftGiveAccessRequest**](RentApi.md#nftGiveAccessRequest) | **POST** /rental/nftgiveaccess | 
[**nftRentMintRequest**](RentApi.md#nftRentMintRequest) | **POST** /rental/rentnftmint | 


# **nftAccessRequest**
> TransferResponse nftAccessRequest(body)

Transfer Token

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RentApi(configuration);

let body:.RentApiNftAccessRequestRequest = {
  // NftAccessRequest | Using rented nft.
  body: {
    chainId: "tokenfab-testnet",
    currency: "TOWER",
    nftId: "NO1, 1, 2005",
    renter: "trm1fq5xzwrduvzqeccgjraakk9sql87uttdyr78e7",
    txKey: "1",
  },
};

apiInstance.nftAccessRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **NftAccessRequest**| Using rented nft. |


### Return type

**TransferResponse**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **nftGiveAccessRequest**
> TransferResponse nftGiveAccessRequest(body)

Transfer Token

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RentApi(configuration);

let body:.RentApiNftGiveAccessRequestRequest = {
  // NftGiveAccessRequest | Renter give access to another friend
  body: {
    chainId: "tokenfab-testnet",
    currency: "TOWER",
    newRenter: "trm1fq5xzwrduvzqeccgjraakk9sql87uttdyr78e7",
    nftId: "NO1, 1, 2005",
    renter: "trm1fq5xzwrduvzqeccgjraakk9sql87uttdyr78e7",
    sessionId: "202305201400",
    txKey: "1",
  },
};

apiInstance.nftGiveAccessRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **NftGiveAccessRequest**| Renter give access to another friend |


### Return type

**TransferResponse**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **nftRentMintRequest**
> TransferResponse nftRentMintRequest(body)

Contract owner can mint a date for a specific renter

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RentApi(configuration);

let body:.RentApiNftRentMintRequestRequest = {
  // NftRentMintRequest | Rent Nft for a period of time.
  body: {
    chainId: "tokenfab-testnet",
    currency: "TOWER",
    endDate: 202305201400,
    nftId: "NO1, 1, 2005",
    renter: "trm1fq5xzwrduvzqeccgjraakk9sql87uttdyr78e7",
    startDate: 202305141400,
    txKey: "1",
  },
};

apiInstance.nftRentMintRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **NftRentMintRequest**| Rent Nft for a period of time. |


### Return type

**TransferResponse**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


