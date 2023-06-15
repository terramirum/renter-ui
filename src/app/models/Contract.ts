import { DeployContractParameter, DeployRequest, MintRequest, NftDetail, NftRentMintRequest, VerifyContractRequest } from '../../service/data-contracts';

export class CDeployRequest implements DeployRequest {
    chainId: string = '';
    contractName: string = '';
    contractOwner: string = '';
    contractPatameters: DeployContractParameter[] = [];
    contractTemplate: string = '';
    manageType: string = '';
    precision: number = 0;
    tokenName: string = '';
    txKey?: string = '';
}


export class CMintRequest implements MintRequest {
    address: string = '';
    amount: string = '';
    chainId: string = '';
    currency: string = '';
    memo?: string = '';
    nftDetail?: CNftDetail;
    txKey?: string = '';
}

export class CNftDetail implements NftDetail {
    avatarUri?: string = '';
    bedding?: string = '';
    chainId?: string = '';
    id?: string = '';
    size?: string = '';
    type?: string = '';
    uri?: string = '';
    wireless?: boolean = true;
}

export class CNftRentMintRequest implements NftRentMintRequest {
    chainId: string = '';
    currency: string = '';
    endDate: number = 0;
    nftId: string = '';
    renter: string = '';
    startDate: number = 0;
    txKey?: string= '';
}

export class CVerifyContractRequest implements VerifyContractRequest{
    chainId: string;
    currency: string; 
}