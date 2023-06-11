import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ContractApiRequestFactory, ContractApiResponseProcessor} from "../apis/ContractApi";
export class ObservableContractApi {
    private requestFactory: ContractApiRequestFactory;
    private responseProcessor: ContractApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractApiRequestFactory,
        responseProcessor?: ContractApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContractApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContractApiResponseProcessor();
    }

    /**
     * Contract deploy or store
     * @param body Deploy Contract
     */
    public contractstore(body: DeployRequest, _options?: Configuration): Observable<DeployResponse> {
        const requestContextPromise = this.requestFactory.contractstore(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contractstore(rsp)));
            }));
    }

    /**
     * Contract deploy or store
     * @param body Verify Contract
     */
    public contractverify(body: VerifyContractRequest, _options?: Configuration): Observable<VerifyContractResponse> {
        const requestContextPromise = this.requestFactory.contractverify(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contractverify(rsp)));
            }));
    }

}

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Existing chains in the system.
     */
    public paramchain(_options?: Configuration): Observable<ChainsResponse> {
        const requestContextPromise = this.requestFactory.paramchain(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paramchain(rsp)));
            }));
    }

    /**
     * Existing chains in the system.
     * @param chainid Chain Id
     */
    public paramcoin(chainid: string, _options?: Configuration): Observable<CoinsResponse> {
        const requestContextPromise = this.requestFactory.paramcoin(chainid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paramcoin(rsp)));
            }));
    }

    /**
     * Ping
     */
    public ping(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.ping(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.ping(rsp)));
            }));
    }

    /**
     * Getting class of the contract owner
     * @param chainid Chain id
     * @param contractowner contract owner
     */
    public rentalclasses(chainid: string, contractowner: string, _options?: Configuration): Observable<NftClassResponse> {
        const requestContextPromise = this.requestFactory.rentalclasses(chainid, contractowner, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rentalclasses(rsp)));
            }));
    }

    /**
     * Getting nfts of the class
     * @param chainid Chain id
     * @param classid Class id
     */
    public rentalnfts(chainid: string, classid: string, _options?: Configuration): Observable<NftDetailResponse> {
        const requestContextPromise = this.requestFactory.rentalnfts(chainid, classid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rentalnfts(rsp)));
            }));
    }

    /**
     * Getting renters
     * @param classid Class id of the nft
     * @param currency Currency of the class
     * @param nftid nft id
     * @param sessionid renter
     */
    public rentalrenters(classid: string, currency: string, nftid: string, sessionid: string, _options?: Configuration): Observable<NftRenterResponse> {
        const requestContextPromise = this.requestFactory.rentalrenters(classid, currency, nftid, sessionid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rentalrenters(rsp)));
            }));
    }

    /**
     * Getting session
     * @param chainid Class id of the nft
     * @param currency Currency of the class
     * @param nftid nft id
     * @param renter renter
     */
    public rentalsessions(chainid: string, currency: string, nftid: string, renter: string, _options?: Configuration): Observable<NftSessionResponse> {
        const requestContextPromise = this.requestFactory.rentalsessions(chainid, currency, nftid, renter, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rentalsessions(rsp)));
            }));
    }

    /**
     * Getting transaction by Tx Hash and Chain Id.
     * @param current Block number
     * @param chainid chain id
     */
    public transactionblock(current: string, chainid: string, _options?: Configuration): Observable<BlockDetail> {
        const requestContextPromise = this.requestFactory.transactionblock(current, chainid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionblock(rsp)));
            }));
    }

    /**
     * Getting transaction by Tx Hash and Chain Id.
     * @param txhash Transaction Hash
     * @param chainid Chain Id
     */
    public transactiondetail(txhash: string, chainid: string, _options?: Configuration): Observable<UpdateChainSettle> {
        const requestContextPromise = this.requestFactory.transactiondetail(txhash, chainid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactiondetail(rsp)));
            }));
    }

}

import { RentApiRequestFactory, RentApiResponseProcessor} from "../apis/RentApi";
export class ObservableRentApi {
    private requestFactory: RentApiRequestFactory;
    private responseProcessor: RentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RentApiRequestFactory,
        responseProcessor?: RentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RentApiResponseProcessor();
    }

    /**
     * Transfer Token
     * @param body Using rented nft.
     */
    public nftAccessRequest(body: NftAccessRequest, _options?: Configuration): Observable<TransferResponse> {
        const requestContextPromise = this.requestFactory.nftAccessRequest(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nftAccessRequest(rsp)));
            }));
    }

    /**
     * Transfer Token
     * @param body Renter give access to another friend
     */
    public nftGiveAccessRequest(body: NftGiveAccessRequest, _options?: Configuration): Observable<TransferResponse> {
        const requestContextPromise = this.requestFactory.nftGiveAccessRequest(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nftGiveAccessRequest(rsp)));
            }));
    }

    /**
     * Contract owner can mint a date for a specific renter
     * @param body Rent Nft for a period of time.
     */
    public nftRentMintRequest(body: NftRentMintRequest, _options?: Configuration): Observable<TransferResponse> {
        const requestContextPromise = this.requestFactory.nftRentMintRequest(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nftRentMintRequest(rsp)));
            }));
    }

}

import { WalletApiRequestFactory, WalletApiResponseProcessor} from "../apis/WalletApi";
export class ObservableWalletApi {
    private requestFactory: WalletApiRequestFactory;
    private responseProcessor: WalletApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletApiRequestFactory,
        responseProcessor?: WalletApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WalletApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WalletApiResponseProcessor();
    }

    /**
     * Burn Token
     * @param body Burn token
     */
    public burn(body: BurnRequest, _options?: Configuration): Observable<TransferResponse> {
        const requestContextPromise = this.requestFactory.burn(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.burn(rsp)));
            }));
    }

    /**
     * Create wallet
     * @param body Create wallet struct
     */
    public createWallet(body: WalletGetRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.createWallet(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWallet(rsp)));
            }));
    }

    /**
     * Get balance of a wallet
     * @param body Balance check struct
     */
    public getBalance(body: BalanceRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getBalance(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBalance(rsp)));
            }));
    }

    /**
     * Import wallet
     * @param body Import wallet struct
     */
    public importWallet(body: WalletImportRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.importWallet(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importWallet(rsp)));
            }));
    }

    /**
     * Mint Token
     * @param body Mint token
     */
    public mint(body: MintRequest, _options?: Configuration): Observable<TransferResponse> {
        const requestContextPromise = this.requestFactory.mint(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mint(rsp)));
            }));
    }

    /**
     * Transfer Token
     * @param body Transfer request
     */
    public transfer(body: TransferRequest, _options?: Configuration): Observable<TransferResponse> {
        const requestContextPromise = this.requestFactory.transfer(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transfer(rsp)));
            }));
    }

}
