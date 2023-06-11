# .WalletApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**burn**](WalletApi.md#burn) | **POST** /wallet/withdraw | 
[**createWallet**](WalletApi.md#createWallet) | **POST** /wallet/create | 
[**getBalance**](WalletApi.md#getBalance) | **POST** /wallet/balance | 
[**importWallet**](WalletApi.md#importWallet) | **POST** /wallet/import | 
[**mint**](WalletApi.md#mint) | **POST** /wallet/deposit | 
[**transfer**](WalletApi.md#transfer) | **POST** /wallet/transfer | 


# **burn**
> TransferResponse burn(body)

Burn Token

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletApi(configuration);

let body:.WalletApiBurnRequest = {
  // BurnRequest | Burn token
  body: {
    address: "tfab1e7sdt95e5lp5jr88c6kuqfdq3rym86gstc2hwr",
    amount: "1000000",
    chainId: "tokenfab-testnet",
    currency: "USD",
    memo: "memo_example",
    txKey: "1",
  },
};

apiInstance.burn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **BurnRequest**| Burn token |


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

# **createWallet**
> void createWallet(body)

Create wallet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletApi(configuration);

let body:.WalletApiCreateWalletRequest = {
  // WalletGetRequest | Create wallet struct
  body: {
    accountId: 1,
    chainId: "chainId_example",
    talentId: 1,
  },
};

apiInstance.createWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WalletGetRequest**| Create wallet struct |


### Return type

**void**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created wallet is returned to the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBalance**
> void getBalance(body)

Get balance of a wallet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletApi(configuration);

let body:.WalletApiGetBalanceRequest = {
  // BalanceRequest | Balance check struct
  body: {
    address: "tfab1e7sdt95e5lp5jr88c6kuqfdq3rym86gstc2hwr",
    chainId: "tokenfab-testnet",
    currency: "USD",
  },
};

apiInstance.getBalance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **BalanceRequest**| Balance check struct |


### Return type

**void**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Balance of the account returned to the user |  * amount - Amount of coin. It is integer and no decimal. It should be powered by precision. For cosmos generally 6. 1 ATOM&#x3D;1000000 required: true <br>  * precision - Token precision required: true <br>  * currency - The currency defined in the system. required: true <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importWallet**
> void importWallet(body)

Import wallet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletApi(configuration);

let body:.WalletApiImportWalletRequest = {
  // WalletImportRequest | Import wallet struct
  body: {
    accountId: 1,
    chainId: "chainId_example",
    mnemonic: "mnemonic_example",
    talentId: 1,
  },
};

apiInstance.importWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WalletImportRequest**| Import wallet struct |


### Return type

**void**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created wallet is returned to the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mint**
> TransferResponse mint(body)

Mint Token

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletApi(configuration);

let body:.WalletApiMintRequest = {
  // MintRequest | Mint token
  body: {
    address: "tfab1e7sdt95e5lp5jr88c6kuqfdq3rym86gstc2hwr",
    amount: "1000000",
    chainId: "tokenfab-testnet",
    currency: "GOLD",
    memo: "memo_example",
    nftDetail: {
      avatarUri: "avatarUri_example",
      bedding: "bedding_example",
      chainId: "chainId_example",
      id: "id_example",
      size: "size_example",
      type: "type_example",
      uri: "uri_example",
      wireless: true,
    },
    txKey: "1",
  },
};

apiInstance.mint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **MintRequest**| Mint token |


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

# **transfer**
> TransferResponse transfer(body)

Transfer Token

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletApi(configuration);

let body:.WalletApiTransferRequest = {
  // TransferRequest | Transfer request
  body: {
    amount: "1000000",
    chainId: "tokenfab-testnet",
    currency: "TFAB",
    fromAddress: "tfab1e7sdt95e5lp5jr88c6kuqfdq3rym86gstc2hwr",
    gasLimit: 200000,
    memo: "memo_example",
    toAddress: "tfab1e7sdt95e5lp5jr88c6kuqfdq3rym86gstc2hwr",
    txKey: "1",
  },
};

apiInstance.transfer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **TransferRequest**| Transfer request |


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


