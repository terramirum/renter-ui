export class Authentication {
  /**
   * Email of user df
   * in: string
   */
  email?: string;
  /**
   * Password
   * in: string
   */
  password?: string;
}

/**
 * Balance request for the address and chain id.
 * ChainId and address are neccessary to get balance. Currency is optional.
 * Only currencies return in the system defined.
 */
export class BalanceRequest {
  /**
   * Taken address from create wallet api
   * @example "tfab1e7sdt95e5lp5jr88c6kuqfdq3rym86gstc2hwr"
   */
  address: string;
  /**
   * sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * Currency code is the token short name like GOLD, USD, USDT
   * It gives as a parameter of TokenName when deploying contract
   * @example "USD"
   */
  currency: string;
}

export class BalanceResponse {
  /**
   * Amount of coin. It is integer and no decimal. It should be powered by precision.
   * For cosmos generally 6. 1 ATOM=1000000
   * For nft, precision is zero. then amount should be 1 to burn it.
   * Amount is the nft number.
   * @example "1000000"
   */
  amount: number;
  /**
   * Currency code is the token short name like GOLD, USD, USDT
   * It gives as a parameter of TokenName when deploying contract
   * @example "USD"
   */
  currency: string;
  precision: number;
}

/** Block detail */
export class BlockDetail {
  /**
   * Latest block of given chain
   * @format int64
   */
  lastest: number;
  /** Transaction in the block. */
  trans: BlockTran[];
}

/** transaction detail in the block. */
export class BlockTran {
  /** Reciever of the coin or token. */
  receiver?: string;
  /** Sender of the coin or token */
  sender?: string;
  tran?: UpdateChainSettle;
}

export class BurnRequest {
  /**
   * Taken address from create wallet api
   * @example "tfab1e7sdt95e5lp5jr88c6kuqfdq3rym86gstc2hwr"
   */
  address: string;
  /**
   * Amount of coin. It is integer and no decimal. It should be powered by precision.
   * For cosmos generally 6. 1 ATOM=1000000
   * For nft, precision is zero. then amount should be 1 to burn it.
   * Amount is the nft number.
   * @example "1000000"
   */
  amount: string;
  /**
   * sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * Currency code is the token short name like GOLD, USD, USDT
   * It gives as a parameter of TokenName when deploying contract
   * @example "USD"
   */
  currency: string;
  /** Some chain support memo log. It may be shown in the blockexplorer. */
  memo?: string;
  /**
   * the key given by client with any unique number to take response with that key. If not use you may set empty. Use it to take asynch response.
   * @example "1"
   */
  txKey?: string;
}

/** Chain definition response */
export class ChainsResponse {
  /**
   * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * Network Coin
   * @example "ETH"
   */
  networkCoin: string;
}

/** Coin definition response */
export class CoinsResponse {
  /**
   * CoinId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /** Contract Address */
  contractAddress?: string;
  /**
   * The currency defined in the system.
   * @example "GOLD"
   */
  currency: string;
  /**
   * The currency defined in the chain.
   * @example "GOLD"
   */
  denom: string;
  /**
   * The gas currency defined in the chain. To transfer token or nft, needs to have gas coin.
   * @example "TFAB"
   */
  gasCoin: string;
  /**
   * Manage Type is values 1: Coin 2: Token, 3: Nft
   * @example "2"
   */
  manageType: string;
  /**
   * Token precision
   * @format int16
   * @example 6
   */
  precision: number;
}

export class DeployContractParameter {
  /**
   * #MAXSUPPLY
   * #NAME
   * #URI
   * @example "#NAME"
   */
  name?: string;
  /**
   * 10000
   * Tokenfab Wind Turbine NFT
   * https://nft.tokenfab.io/api/v1/wildturbine/tokens/
   * @example "Tokenfab Wind Turbine NFT"
   */
  value?: string;
}

/** Defining smart contract in the system and deploy it to the chain. */
export class DeployRequest {
  /**
   * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * For solidity, it sould be like a class name, for cosmos based chain is the free format.
   * @example "Tokenfab USD"
   */
  contractName: string;
  /**
   * Contract creator address. It should have gas coin related chain and it should be imported or created on the system.
   * @example "tfab1e7sdt95e5lp5jr88c6kuqfdq3rym86gstc2hwr"
   */
  contractOwner: string;
  /** Parameter on the github repo template. There is # parameter in the template. */
  contractPatameters: DeployContractParameter[];
  /**
   * Template name at github repo. For solidity: https://github.com/tokenfab/testnet-contracts/tree/main/templates For Cosmos: https://github.com/tokenfab/testnet-contracts/tree/main/templates/wasm
   * @example "cw20_base.wasm"
   */
  contractTemplate: string;
  /**
   * Manage Type is values 1: Coin 2: Token, 3: Nft
   * @example "2"
   */
  manageType: string;
  /**
   * Token precision
   * @format int16
   * @example 6
   */
  precision: number;
  /**
   * TokenName is the token short name like GOLD, USD, USDT
   * @example "USD"
   */
  tokenName: string;
  /**
   * the key given by client with any unique number to take response with that key. If not use you may set empty. Use it to take asynch response.
   * @example "1"
   */
  txKey?: string;
}

/** Smart contract creating result. */
export class DeployResponse {
  /** Contract Address */
  contractAddress?: string;
  /** Tx hash */
  txHash?: string;
  /** Tx Key */
  txKey?: string;
}

/** mint request is used for deposit api. Contract owner account can make mint operation for any address. */
export class MintRequest {
  /**
   * Taken address from create wallet api
   * @example "tfab1e7sdt95e5lp5jr88c6kuqfdq3rym86gstc2hwr"
   */
  address: string;
  /**
   * Amount of coin. It is integer and no decimal. It should be powered by precision. For cosmos generally 6. 1 ATOM=1000000
   * @example "1000000"
   */
  amount: string;
  /**
   * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * The currency defined in the system.
   * @example "GOLD"
   */
  currency: string;
  /** Some chain support memo log. It may be shown in the blockexplorer. */
  memo?: string;
  /**
   * the key given by client with any unique number to take response with that key. If not use you may set empty. Use it to take asynch response.
   * @example "1"
   */
  txKey?: string;
  /** Parameter on the github repo template. There is # parameter in the template. */
  nftParameters: DeployContractParameter[];
}

export class NftAccessRequest {
  /**
   * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * The NFT short name of the asset.
   * @example "TOWER"
   */
  currency: string;
  /**
   * Nft Id given by randomly but it must be unique.
   * @example "NO1, 1, 2005"
   */
  nftId: string;
  /**
   * Renter address. Only nft owner can rent.
   * @example "trm1fq5xzwrduvzqeccgjraakk9sql87uttdyr78e7"
   */
  renter: string;
  /**
   * the key given by client with any unique number to take response with that key. If not use you may set empty. Use it to take asynch response.
   * @example "1"
   */
  txKey?: string;
}

export class NftClass {
  /** description is a brief description of nft classification. Optional */
  description?: string;
  /**
   * id defines the unique identifier of the NFT classification, similar to the
   * contract address of ERC721
   * @example "1"
   */
  id?: string;
  /**
   * name defines the human-readable name of the NFT classification. Optional
   * @example "human-readable name"
   */
  name?: string;
  /**
   * symbol is an abbreviated name for nft classification. Optional
   * @example "TOWER"
   */
  symbol?: string;
  /**
   * uri for the class metadata stored off chain. It can define schema for Class
   * and NFT `Data` attributes. Optional
   */
  uri?: string;
  avatarUri?: string;
}

export class NftClassResponse {
  /** nft classes defined for a contract address */
  nftClasses?: NftClass[];
}

export class NftDetail {
  /** small image url */
  avatarUri?: string;
  /** how many bed include */
  bedding?: string;
  /** class_id associated with the NFT, similar to the contract address of ERC721 */
  chainId?: string;
  /** id is a unique identifier of the NFT */
  id?: string;
  /** room size. large midium or m2 */
  size?: string;
  /** all inclusive, room breakfast */
  type?: string;
  /** uri for the NFT metadata stored off chain */
  uri?: string;
  /** having wireless or not */
  wireless?: boolean;
}

export class NftDetailResponse {
  /** nft classes defined for a contract address */
  nftDetails?: NftDetail[];
}

export class NftSendSessionRequest {
  /**
   * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * The NFT short name of the asset.
   * @example "TOWER"
   */
  currency: string;
  /**
   * Renter address. Only nft owner can rent.
   * @example "trm1fq5xzwrduvzqeccgjraakk9sql87uttdyr78e7"
   */
  newRenter: string;
  /**
   * Nft Id given by randomly but it must be unique.
   * @example "NO1, 1, 2005"
   */
  nftId: string;
  /**
   * Renter address. Only nft owner can rent.
   * @example "trm1fq5xzwrduvzqeccgjraakk9sql87uttdyr78e7"
   */
  renter: string;
  /**
   * Session Id, most likely start date of the rent.
   * @example "202305201400"
   */
  sessionId: string;
  /**
   * the key given by client with any unique number to take response with that key. If not use you may set empty. Use it to take asynch response.
   * @example "1"
   */
  txKey?: string;
}

export class NftGiveAccessRequest {
  /**
   * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * The NFT short name of the asset.
   * @example "TOWER"
   */
  currency: string;
  /**
   * Renter address. Only nft owner can rent.
   * @example "trm1fq5xzwrduvzqeccgjraakk9sql87uttdyr78e7"
   */
  newRenter: string;
  /**
   * Nft Id given by randomly but it must be unique.
   * @example "NO1, 1, 2005"
   */
  nftId: string;
  /**
   * Renter address. Only nft owner can rent.
   * @example "trm1fq5xzwrduvzqeccgjraakk9sql87uttdyr78e7"
   */
  renter: string;
  /**
   * Session Id, most likely start date of the rent.
   * @example "202305201400"
   */
  sessionId: string;
  /**
   * the key given by client with any unique number to take response with that key. If not use you may set empty. Use it to take asynch response.
   * @example "1"
   */
  txKey?: string;
}

export class NftRentBurnRequest {
  /**
   * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * The NFT short name of the asset.
   * @example "TOWER"
   */
  currency: string;
  /**
   * Nft Id given by randomly but it must be unique.
   * @example "NO1, 1, 2005"
   */
  nftId: string;
  /**
   * Session Id, most likely start date of the rent.
   * @example "202305201400"
   */
  sessionId: string;
  /**
   * the key given by client with any unique number to take response with that key. If not use you may set empty. Use it to take asynch response.
   * @example "1"
   */
  txKey?: string;
}

export class NftRentDate {
  /**
   * End date. UTC Format: YYYYMMDDHHMM
   * @format int64
   * @example 202305201400
   */
  endDate: number = 0;
  /**
   * Session Id, most likely start date of the rent.
   * @example "202305201400"
   */
  nftDetail: string = '';
  /**
   * Start date. UTC Format: YYYYMMDDHHMM
   * @format int64
   * @example 202305141400
   */
  startDate: number = 0;

  sessionId: string = '';
  classId: string = '';
  nftId: string = '';
}

export class NftRentMintRequest {
  /**
   * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * The NFT short name of the asset.
   * @example "TOWER"
   */
  currency: string;
  /**
   * End date. UTC Format: YYYYMMDDHHMM
   * @format int64
   * @example 202305201400
   */
  endDate: number;
  /**
   * Nft Id given by randomly but it must be unique.
   * @example "NO1, 1, 2005"
   */
  nftId: string;
  /**
   * Renter address. Only nft owner can rent.
   * @example "trm1fq5xzwrduvzqeccgjraakk9sql87uttdyr78e7"
   */
  renter: string;
  /**
   * Start date. UTC Format: YYYYMMDDHHMM
   * @format int64
   * @example 202305141400
   */
  startDate: number;
  /**
   * the key given by client with any unique number to take response with that key. If not use you may set empty. Use it to take asynch response.
   * @example "1"
   */
  txKey?: string;
}

export class NftRenterRequest {
  /**
   * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * The NFT short name of the asset.
   * @example "TOWER"
   */
  currency: string;
  /**
   * Nft Id given by randomly but it must be unique.
   * @example "NO1, 1, 2005"
   */
  nftId: string;
  /**
   * Session Id, most likely start date of the rent.
   * @example "202305201400"
   */
  sessionId: string;
}

export class NftRenterResponse {
  /**
   * Renter address. Only nft owner can rent.
   * @example "trm1fq5xzwrduvzqeccgjraakk9sql87uttdyr78e7"
   */
  renter: string[];
}

export class NftSessionRequest {
  /**
   * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * The NFT short name of the asset.
   * @example "TOWER"
   */
  currency: string;
  /**
   * Nft Id given by randomly but it must be unique.
   * @example "NO1, 1, 2005"
   */
  nftId: string;
  /**
   * Renter address. Only nft owner can rent.
   * @example "trm1fq5xzwrduvzqeccgjraakk9sql87uttdyr78e7"
   */
  renter: string;
}

export class NftSessionResponse {
  nftRentDates?: NftRentDate[] = [];
}

/** Transfer request to transfer coin, nft, token and make payment. */
export class TransferRequest {
  /**
   * Amount of coin. It is integer and no decimal. It should be powered by precision. For cosmos generally 6. 1 ATOM=1000000
   * @example "1000000"
   */
  amount: string = '';
  /**
   * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string = '';
  /**
   * The currency defined in the system.
   * @example "TFAB"
   */
  currency: string = '';
  /**
   * Taken address from create wallet api
   * @example "tfab1e7sdt95e5lp5jr88c6kuqfdq3rym86gstc2hwr"
   */
  fromAddress: string = '';
  /**
   * Amount of gas.
   * @format uint64
   * @example 200000
   */
  gasLimit?: number = 0;
  /** Some chain support memo log. It may be shown in the blockexplorer. */
  memo?: string = '';
  /**
   * To address shuould be taken from the same coin base.
   * @example "tfab1e7sdt95e5lp5jr88c6kuqfdq3rym86gstc2hwr"
   */
  toAddress: string = '';
  /**
   * the key given by client with any unique number to take response with that key. If not use you may set empty. Use it to take asynch response.
   * @example "1"
   */
  txKey?: string = '';
}

/** Txkey and Txhash is returned to the user */
export class TransferResponse {
  /** Tx key is the given in the request. */
  txKey?: string;
  /** Tx hash is the key for transaction. */
  txnHash?: string;
}

/** transaction settlement information. */
export class UpdateChainSettle {
  /**
   * Amount
   * @format double
   */
  amount?: number;
  /**
   * which block transaction belongs.
   * @format int64
   */
  blockCount?: number;
  /** Currency */
  currency?: string;
  /** transaction error when validator accept it. */
  error?: string;
  /**
   * Taken fee from the transaction
   * @format int64
   */
  fee?: number;
  /**
   * Taken gas from the transaction
   * @format int64
   */
  gas?: number;
  /** transaction in the chain or not. */
  isSuccessful?: boolean;
  /** Transaction hash */
  txHash?: string;
}

/** Contract verification request after deploying contract. For cosmos based chain, make it twice until taken contract address. */
export class VerifyContractRequest {
  /**
   * ChainId should be the same with the system. It could be taken from block explorer like sepolia, ethereum, cosmos-mainnet, tokenfab-mainnet
   * @example "tokenfab-testnet"
   */
  chainId: string;
  /**
   * Currency code is the token short name like GOLD, USD, USDT
   * It gives as a parameter of TokenName when deploying contract
   * @example "USD"
   */
  currency: string;
}

/**
 * Contract verification response. It returns contract address.
 * Cosmos based chain returns after two times call. Becuase chain processes the transaction.
 * For solidity, take the flatten file from github and use etherscan to verify your contract.
 */
export class VerifyContractResponse {
  /**
   * Contract address
   * @example "tfab16jzpxp0e8550c9aht6q9svcux30vtyyyyxv5w2l2djjra46580wsnnytlw"
   */
  contractAddress?: string;
}

export class WalletGetRequest {
  /**
   * Account Id
   * in: int
   * @format uint32
   */
  accountId?: number;
  /**
   * Chain Id
   * in: string
   */
  chainId?: string;
  /**
   * Talent Id
   * in: int
   * @format uint32
   */
  talentId?: number;
}

export class WalletImportRequest {
  /** @format uint32 */
  accountId?: number;
  chainId?: string;
  mnemonic?: string;
  /** @format uint32 */
  talentId?: number;
}
