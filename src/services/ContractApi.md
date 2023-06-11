# .ContractApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contractstore**](ContractApi.md#contractstore) | **POST** /contract/deploy | 
[**contractverify**](ContractApi.md#contractverify) | **POST** /contract/verify | 


# **contractstore**
> DeployResponse contractstore(body)

Contract deploy or store

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractApi(configuration);

let body:.ContractApiContractstoreRequest = {
  // DeployRequest | Deploy Contract
  body: {
    chainId: "tokenfab-testnet",
    contractName: "Tokenfab USD",
    contractOwner: "tfab1e7sdt95e5lp5jr88c6kuqfdq3rym86gstc2hwr",
    contractPatameters: [
      {
        name: "#NAME",
        value: "Tokenfab Wind Turbine NFT",
      },
    ],
    contractTemplate: "cw20_base.wasm",
    manageType: "2",
    precision: 6,
    tokenName: "USD",
    txKey: "1",
  },
};

apiInstance.contractstore(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DeployRequest**| Deploy Contract |


### Return type

**DeployResponse**

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

# **contractverify**
> VerifyContractResponse contractverify(body)

Contract deploy or store

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractApi(configuration);

let body:.ContractApiContractverifyRequest = {
  // VerifyContractRequest | Verify Contract
  body: {
    chainId: "tokenfab-testnet",
    currency: "USD",
  },
};

apiInstance.contractverify(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **VerifyContractRequest**| Verify Contract |


### Return type

**VerifyContractResponse**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VerifyContractResponse |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


