import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Authentication } from '../models/Authentication';
import { BalanceRequest } from '../models/BalanceRequest';
import { BlockDetail } from '../models/BlockDetail';
import { BlockTran } from '../models/BlockTran';
import { BurnRequest } from '../models/BurnRequest';
import { ChainsResponse } from '../models/ChainsResponse';
import { CoinsResponse } from '../models/CoinsResponse';
import { DeployContractParameter } from '../models/DeployContractParameter';
import { DeployRequest } from '../models/DeployRequest';
import { DeployResponse } from '../models/DeployResponse';
import { MintRequest } from '../models/MintRequest';
import { NftAccessRequest } from '../models/NftAccessRequest';
import { NftClass } from '../models/NftClass';
import { NftClassResponse } from '../models/NftClassResponse';
import { NftDetail } from '../models/NftDetail';
import { NftDetailResponse } from '../models/NftDetailResponse';
import { NftGiveAccessRequest } from '../models/NftGiveAccessRequest';
import { NftRentBurnRequest } from '../models/NftRentBurnRequest';
import { NftRentDate } from '../models/NftRentDate';
import { NftRentMintRequest } from '../models/NftRentMintRequest';
import { NftRenterRequest } from '../models/NftRenterRequest';
import { NftRenterResponse } from '../models/NftRenterResponse';
import { NftSessionRequest } from '../models/NftSessionRequest';
import { NftSessionResponse } from '../models/NftSessionResponse';
import { TransferRequest } from '../models/TransferRequest';
import { TransferResponse } from '../models/TransferResponse';
import { UpdateChainSettle } from '../models/UpdateChainSettle';
import { VerifyContractRequest } from '../models/VerifyContractRequest';
import { VerifyContractResponse } from '../models/VerifyContractResponse';
import { WalletGetRequest } from '../models/WalletGetRequest';
import { WalletImportRequest } from '../models/WalletImportRequest';

import { ObservableContractApi } from "./ObservableAPI";
import { ContractApiRequestFactory, ContractApiResponseProcessor} from "../apis/ContractApi";

export interface ContractApiContractstoreRequest {
    /**
     * Deploy Contract
     * @type DeployRequest
     * @memberof ContractApicontractstore
     */
    body: DeployRequest
}

export interface ContractApiContractverifyRequest {
    /**
     * Verify Contract
     * @type VerifyContractRequest
     * @memberof ContractApicontractverify
     */
    body: VerifyContractRequest
}

export class ObjectContractApi {
    private api: ObservableContractApi

    public constructor(configuration: Configuration, requestFactory?: ContractApiRequestFactory, responseProcessor?: ContractApiResponseProcessor) {
        this.api = new ObservableContractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Contract deploy or store
     * @param param the request object
     */
    public contractstore(param: ContractApiContractstoreRequest, options?: Configuration): Promise<DeployResponse> {
        return this.api.contractstore(param.body,  options).toPromise();
    }

    /**
     * Contract deploy or store
     * @param param the request object
     */
    public contractverify(param: ContractApiContractverifyRequest, options?: Configuration): Promise<VerifyContractResponse> {
        return this.api.contractverify(param.body,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiParamchainRequest {
}

export interface DefaultApiParamcoinRequest {
    /**
     * Chain Id
     * @type string
     * @memberof DefaultApiparamcoin
     */
    chainid: string
}

export interface DefaultApiPingRequest {
}

export interface DefaultApiRentalclassesRequest {
    /**
     * Chain id
     * @type string
     * @memberof DefaultApirentalclasses
     */
    chainid: string
    /**
     * contract owner
     * @type string
     * @memberof DefaultApirentalclasses
     */
    contractowner: string
}

export interface DefaultApiRentalnftsRequest {
    /**
     * Chain id
     * @type string
     * @memberof DefaultApirentalnfts
     */
    chainid: string
    /**
     * Class id
     * @type string
     * @memberof DefaultApirentalnfts
     */
    classid: string
}

export interface DefaultApiRentalrentersRequest {
    /**
     * Class id of the nft
     * @type string
     * @memberof DefaultApirentalrenters
     */
    classid: string
    /**
     * Currency of the class
     * @type string
     * @memberof DefaultApirentalrenters
     */
    currency: string
    /**
     * nft id
     * @type string
     * @memberof DefaultApirentalrenters
     */
    nftid: string
    /**
     * renter
     * @type string
     * @memberof DefaultApirentalrenters
     */
    sessionid: string
}

export interface DefaultApiRentalsessionsRequest {
    /**
     * Class id of the nft
     * @type string
     * @memberof DefaultApirentalsessions
     */
    chainid: string
    /**
     * Currency of the class
     * @type string
     * @memberof DefaultApirentalsessions
     */
    currency: string
    /**
     * nft id
     * @type string
     * @memberof DefaultApirentalsessions
     */
    nftid: string
    /**
     * renter
     * @type string
     * @memberof DefaultApirentalsessions
     */
    renter: string
}

export interface DefaultApiTransactionblockRequest {
    /**
     * Block number
     * @type string
     * @memberof DefaultApitransactionblock
     */
    current: string
    /**
     * chain id
     * @type string
     * @memberof DefaultApitransactionblock
     */
    chainid: string
}

export interface DefaultApiTransactiondetailRequest {
    /**
     * Transaction Hash
     * @type string
     * @memberof DefaultApitransactiondetail
     */
    txhash: string
    /**
     * Chain Id
     * @type string
     * @memberof DefaultApitransactiondetail
     */
    chainid: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Existing chains in the system.
     * @param param the request object
     */
    public paramchain(param: DefaultApiParamchainRequest = {}, options?: Configuration): Promise<ChainsResponse> {
        return this.api.paramchain( options).toPromise();
    }

    /**
     * Existing chains in the system.
     * @param param the request object
     */
    public paramcoin(param: DefaultApiParamcoinRequest, options?: Configuration): Promise<CoinsResponse> {
        return this.api.paramcoin(param.chainid,  options).toPromise();
    }

    /**
     * Ping
     * @param param the request object
     */
    public ping(param: DefaultApiPingRequest = {}, options?: Configuration): Promise<void> {
        return this.api.ping( options).toPromise();
    }

    /**
     * Getting class of the contract owner
     * @param param the request object
     */
    public rentalclasses(param: DefaultApiRentalclassesRequest, options?: Configuration): Promise<NftClassResponse> {
        return this.api.rentalclasses(param.chainid, param.contractowner,  options).toPromise();
    }

    /**
     * Getting nfts of the class
     * @param param the request object
     */
    public rentalnfts(param: DefaultApiRentalnftsRequest, options?: Configuration): Promise<NftDetailResponse> {
        return this.api.rentalnfts(param.chainid, param.classid,  options).toPromise();
    }

    /**
     * Getting renters
     * @param param the request object
     */
    public rentalrenters(param: DefaultApiRentalrentersRequest, options?: Configuration): Promise<NftRenterResponse> {
        return this.api.rentalrenters(param.classid, param.currency, param.nftid, param.sessionid,  options).toPromise();
    }

    /**
     * Getting session
     * @param param the request object
     */
    public rentalsessions(param: DefaultApiRentalsessionsRequest, options?: Configuration): Promise<NftSessionResponse> {
        return this.api.rentalsessions(param.chainid, param.currency, param.nftid, param.renter,  options).toPromise();
    }

    /**
     * Getting transaction by Tx Hash and Chain Id.
     * @param param the request object
     */
    public transactionblock(param: DefaultApiTransactionblockRequest, options?: Configuration): Promise<BlockDetail> {
        return this.api.transactionblock(param.current, param.chainid,  options).toPromise();
    }

    /**
     * Getting transaction by Tx Hash and Chain Id.
     * @param param the request object
     */
    public transactiondetail(param: DefaultApiTransactiondetailRequest, options?: Configuration): Promise<UpdateChainSettle> {
        return this.api.transactiondetail(param.txhash, param.chainid,  options).toPromise();
    }

}

import { ObservableRentApi } from "./ObservableAPI";
import { RentApiRequestFactory, RentApiResponseProcessor} from "../apis/RentApi";

export interface RentApiNftAccessRequestRequest {
    /**
     * Using rented nft.
     * @type NftAccessRequest
     * @memberof RentApinftAccessRequest
     */
    body: NftAccessRequest
}

export interface RentApiNftGiveAccessRequestRequest {
    /**
     * Renter give access to another friend
     * @type NftGiveAccessRequest
     * @memberof RentApinftGiveAccessRequest
     */
    body: NftGiveAccessRequest
}

export interface RentApiNftRentMintRequestRequest {
    /**
     * Rent Nft for a period of time.
     * @type NftRentMintRequest
     * @memberof RentApinftRentMintRequest
     */
    body: NftRentMintRequest
}

export class ObjectRentApi {
    private api: ObservableRentApi

    public constructor(configuration: Configuration, requestFactory?: RentApiRequestFactory, responseProcessor?: RentApiResponseProcessor) {
        this.api = new ObservableRentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Transfer Token
     * @param param the request object
     */
    public nftAccessRequest(param: RentApiNftAccessRequestRequest, options?: Configuration): Promise<TransferResponse> {
        return this.api.nftAccessRequest(param.body,  options).toPromise();
    }

    /**
     * Transfer Token
     * @param param the request object
     */
    public nftGiveAccessRequest(param: RentApiNftGiveAccessRequestRequest, options?: Configuration): Promise<TransferResponse> {
        return this.api.nftGiveAccessRequest(param.body,  options).toPromise();
    }

    /**
     * Contract owner can mint a date for a specific renter
     * @param param the request object
     */
    public nftRentMintRequest(param: RentApiNftRentMintRequestRequest, options?: Configuration): Promise<TransferResponse> {
        return this.api.nftRentMintRequest(param.body,  options).toPromise();
    }

}

import { ObservableWalletApi } from "./ObservableAPI";
import { WalletApiRequestFactory, WalletApiResponseProcessor} from "../apis/WalletApi";

export interface WalletApiBurnRequest {
    /**
     * Burn token
     * @type BurnRequest
     * @memberof WalletApiburn
     */
    body: BurnRequest
}

export interface WalletApiCreateWalletRequest {
    /**
     * Create wallet struct
     * @type WalletGetRequest
     * @memberof WalletApicreateWallet
     */
    body: WalletGetRequest
}

export interface WalletApiGetBalanceRequest {
    /**
     * Balance check struct
     * @type BalanceRequest
     * @memberof WalletApigetBalance
     */
    body: BalanceRequest
}

export interface WalletApiImportWalletRequest {
    /**
     * Import wallet struct
     * @type WalletImportRequest
     * @memberof WalletApiimportWallet
     */
    body: WalletImportRequest
}

export interface WalletApiMintRequest {
    /**
     * Mint token
     * @type MintRequest
     * @memberof WalletApimint
     */
    body: MintRequest
}

export interface WalletApiTransferRequest {
    /**
     * Transfer request
     * @type TransferRequest
     * @memberof WalletApitransfer
     */
    body: TransferRequest
}

export class ObjectWalletApi {
    private api: ObservableWalletApi

    public constructor(configuration: Configuration, requestFactory?: WalletApiRequestFactory, responseProcessor?: WalletApiResponseProcessor) {
        this.api = new ObservableWalletApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Burn Token
     * @param param the request object
     */
    public burn(param: WalletApiBurnRequest, options?: Configuration): Promise<TransferResponse> {
        return this.api.burn(param.body,  options).toPromise();
    }

    /**
     * Create wallet
     * @param param the request object
     */
    public createWallet(param: WalletApiCreateWalletRequest, options?: Configuration): Promise<void> {
        return this.api.createWallet(param.body,  options).toPromise();
    }

    /**
     * Get balance of a wallet
     * @param param the request object
     */
    public getBalance(param: WalletApiGetBalanceRequest, options?: Configuration): Promise<void> {
        return this.api.getBalance(param.body,  options).toPromise();
    }

    /**
     * Import wallet
     * @param param the request object
     */
    public importWallet(param: WalletApiImportWalletRequest, options?: Configuration): Promise<void> {
        return this.api.importWallet(param.body,  options).toPromise();
    }

    /**
     * Mint Token
     * @param param the request object
     */
    public mint(param: WalletApiMintRequest, options?: Configuration): Promise<TransferResponse> {
        return this.api.mint(param.body,  options).toPromise();
    }

    /**
     * Transfer Token
     * @param param the request object
     */
    public transfer(param: WalletApiTransferRequest, options?: Configuration): Promise<TransferResponse> {
        return this.api.transfer(param.body,  options).toPromise();
    }

}
