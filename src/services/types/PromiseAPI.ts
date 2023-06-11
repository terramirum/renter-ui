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
import { ObservableContractApi } from './ObservableAPI';

import { ContractApiRequestFactory, ContractApiResponseProcessor} from "../apis/ContractApi";
export class PromiseContractApi {
    private api: ObservableContractApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractApiRequestFactory,
        responseProcessor?: ContractApiResponseProcessor
    ) {
        this.api = new ObservableContractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Contract deploy or store
     * @param body Deploy Contract
     */
    public contractstore(body: DeployRequest, _options?: Configuration): Promise<DeployResponse> {
        const result = this.api.contractstore(body, _options);
        return result.toPromise();
    }

    /**
     * Contract deploy or store
     * @param body Verify Contract
     */
    public contractverify(body: VerifyContractRequest, _options?: Configuration): Promise<VerifyContractResponse> {
        const result = this.api.contractverify(body, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Existing chains in the system.
     */
    public paramchain(_options?: Configuration): Promise<ChainsResponse> {
        const result = this.api.paramchain(_options);
        return result.toPromise();
    }

    /**
     * Existing chains in the system.
     * @param chainid Chain Id
     */
    public paramcoin(chainid: string, _options?: Configuration): Promise<CoinsResponse> {
        const result = this.api.paramcoin(chainid, _options);
        return result.toPromise();
    }

    /**
     * Ping
     */
    public ping(_options?: Configuration): Promise<void> {
        const result = this.api.ping(_options);
        return result.toPromise();
    }

    /**
     * Getting class of the contract owner
     * @param chainid Chain id
     * @param contractowner contract owner
     */
    public rentalclasses(chainid: string, contractowner: string, _options?: Configuration): Promise<NftClassResponse> {
        const result = this.api.rentalclasses(chainid, contractowner, _options);
        return result.toPromise();
    }

    /**
     * Getting nfts of the class
     * @param chainid Chain id
     * @param classid Class id
     */
    public rentalnfts(chainid: string, classid: string, _options?: Configuration): Promise<NftDetailResponse> {
        const result = this.api.rentalnfts(chainid, classid, _options);
        return result.toPromise();
    }

    /**
     * Getting renters
     * @param classid Class id of the nft
     * @param currency Currency of the class
     * @param nftid nft id
     * @param sessionid renter
     */
    public rentalrenters(classid: string, currency: string, nftid: string, sessionid: string, _options?: Configuration): Promise<NftRenterResponse> {
        const result = this.api.rentalrenters(classid, currency, nftid, sessionid, _options);
        return result.toPromise();
    }

    /**
     * Getting session
     * @param chainid Class id of the nft
     * @param currency Currency of the class
     * @param nftid nft id
     * @param renter renter
     */
    public rentalsessions(chainid: string, currency: string, nftid: string, renter: string, _options?: Configuration): Promise<NftSessionResponse> {
        const result = this.api.rentalsessions(chainid, currency, nftid, renter, _options);
        return result.toPromise();
    }

    /**
     * Getting transaction by Tx Hash and Chain Id.
     * @param current Block number
     * @param chainid chain id
     */
    public transactionblock(current: string, chainid: string, _options?: Configuration): Promise<BlockDetail> {
        const result = this.api.transactionblock(current, chainid, _options);
        return result.toPromise();
    }

    /**
     * Getting transaction by Tx Hash and Chain Id.
     * @param txhash Transaction Hash
     * @param chainid Chain Id
     */
    public transactiondetail(txhash: string, chainid: string, _options?: Configuration): Promise<UpdateChainSettle> {
        const result = this.api.transactiondetail(txhash, chainid, _options);
        return result.toPromise();
    }


}



import { ObservableRentApi } from './ObservableAPI';

import { RentApiRequestFactory, RentApiResponseProcessor} from "../apis/RentApi";
export class PromiseRentApi {
    private api: ObservableRentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RentApiRequestFactory,
        responseProcessor?: RentApiResponseProcessor
    ) {
        this.api = new ObservableRentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Transfer Token
     * @param body Using rented nft.
     */
    public nftAccessRequest(body: NftAccessRequest, _options?: Configuration): Promise<TransferResponse> {
        const result = this.api.nftAccessRequest(body, _options);
        return result.toPromise();
    }

    /**
     * Transfer Token
     * @param body Renter give access to another friend
     */
    public nftGiveAccessRequest(body: NftGiveAccessRequest, _options?: Configuration): Promise<TransferResponse> {
        const result = this.api.nftGiveAccessRequest(body, _options);
        return result.toPromise();
    }

    /**
     * Contract owner can mint a date for a specific renter
     * @param body Rent Nft for a period of time.
     */
    public nftRentMintRequest(body: NftRentMintRequest, _options?: Configuration): Promise<TransferResponse> {
        const result = this.api.nftRentMintRequest(body, _options);
        return result.toPromise();
    }


}



import { ObservableWalletApi } from './ObservableAPI';

import { WalletApiRequestFactory, WalletApiResponseProcessor} from "../apis/WalletApi";
export class PromiseWalletApi {
    private api: ObservableWalletApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletApiRequestFactory,
        responseProcessor?: WalletApiResponseProcessor
    ) {
        this.api = new ObservableWalletApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Burn Token
     * @param body Burn token
     */
    public burn(body: BurnRequest, _options?: Configuration): Promise<TransferResponse> {
        const result = this.api.burn(body, _options);
        return result.toPromise();
    }

    /**
     * Create wallet
     * @param body Create wallet struct
     */
    public createWallet(body: WalletGetRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createWallet(body, _options);
        return result.toPromise();
    }

    /**
     * Get balance of a wallet
     * @param body Balance check struct
     */
    public getBalance(body: BalanceRequest, _options?: Configuration): Promise<void> {
        const result = this.api.getBalance(body, _options);
        return result.toPromise();
    }

    /**
     * Import wallet
     * @param body Import wallet struct
     */
    public importWallet(body: WalletImportRequest, _options?: Configuration): Promise<void> {
        const result = this.api.importWallet(body, _options);
        return result.toPromise();
    }

    /**
     * Mint Token
     * @param body Mint token
     */
    public mint(body: MintRequest, _options?: Configuration): Promise<TransferResponse> {
        const result = this.api.mint(body, _options);
        return result.toPromise();
    }

    /**
     * Transfer Token
     * @param body Transfer request
     */
    public transfer(body: TransferRequest, _options?: Configuration): Promise<TransferResponse> {
        const result = this.api.transfer(body, _options);
        return result.toPromise();
    }


}



