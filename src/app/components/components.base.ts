import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { TransferResponse, UpdateChainSettle } from "app/models/data-contracts";
import { Observable, map } from 'rxjs';
import { CoinsResponse, TransferRequest, VerifyContractRequest } from '../models/data-contracts';
import { TerraConstants } from "./contants";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

type TransferEnd = (ret: boolean) => void;


@Component({
    template: `
    <p>
      base-page works!
    </p>
  `,
    styles: [
    ]
})



export class BasePageComponent implements OnInit {
    saving = false;
    basePath = "http://localhost:7171/";
    contractDeployUri = this.basePath + "contract/deploy";
    contractVerifyUri = this.basePath + "contract/verify";
    mintTokenUri = this.basePath + "wallet/deposit";
    transferUri = this.basePath + "wallet/transfer";
    balanceUri = this.basePath + "wallet/balance";
    paramChainsUri = this.basePath + "param/chains";
    paramCoinsUri = this.basePath + "param/coins?chainid={chainid}";
    rentalClassesUri = this.basePath + "rental/classes?chainid={chainid}&contractowner={contractowner}"
    rentalNftsUri = this.basePath + "rental/nfts?chainid={chainid}&classid={classid}&currency={currency}";
    rentalRentersUri = this.basePath + "rental/renters?chainid={chainid}&classid={classid}&currency={currency}&nftid={nftid}&sessionid={sessionid}";
    rentalSessionsUri = this.basePath + "rental/sessions?chainid={chainid}&classid={classid}&currency={currency}&nftid={nftid}&renter={renter}";
    rentalRentNftMintUri = this.basePath + "rental/rentnftmint";
    txDetailUri = this.basePath + "tx/detail?txhash={txHash}&chainid={chainId}";
    delay = ms => new Promise(res => setTimeout(res, ms));
    coins: Map<string, CoinsResponse> = new Map<string, CoinsResponse>();
    closeResult: string;


    protected transferEndDelegate: TransferEnd | null = null;

    ngOnInit(): void {
        this.loadCoins(TerraConstants.chainId);
    }

    setTransferEndDelegate(delegate: TransferEnd) {
        this.transferEndDelegate = delegate;
    }

    loadCoins(chainId: string) {
        let coinUri = this.paramCoinsUri.replace("{chainid}", chainId);
        axios.get<CoinsResponse[]>(coinUri).then((res) => {
            res.data.forEach((item) => {
                let key = item.chainId + item.currency;
                if (!this.coins.has(key)) {
                    this.coins.set(key, item)
                }
            });
        }).catch((ex) => {
            this.raiseError(ex);
        })
    }

    getCoin(chainId: string, currency: string) {
        let key = chainId + currency;

        if (!this.coins.has(key)) {
            this.loadCoins(chainId);
            this.delay(1000).then(((val) => {
                if (!this.coins.has(key)) {
                    alert(currency + "not support for " + chainId);
                } else {
                    return this.coins.get(key);
                }
            }));
        } else {
            return this.coins.get(key);
        }
    }

    transfer(transferRequest: TransferRequest) {
        this.saving = true;
        axios
            .post<TransferResponse>(this.transferUri, transferRequest)
            .then((res) => {
                return this.checkTransactionStatus(res.data.txnHash, transferRequest.chainId, 3);
            })
            .catch((ex) => {
                this.raiseError(ex);
            });
    }

    parseStreamToJson<T>(res: any): T {
        let data: string = '';
        if (res.body != undefined && res.body.getReader != undefined) {
            const reader = res.body.getReader();
            data = this.readStream(reader, data);
            console.log(data)
            return JSON.parse(data) as T;
        } else {
            alert('Unexpected error is occured.');
        }
        return null;
    }


    checkTransactionStatus(txHash: string, chainId: string, tryNumber: number) {
        let tx = this.txDetailUri;
        tx = tx.replace("{chainId}", chainId);
        tx = tx.replace("{txHash}", txHash);
        axios
            .get<UpdateChainSettle>(tx)
            .then((res) => {
                tryNumber++;
                if (res.data.isSuccessful) {
                    this.saving = false;
                    if (this.transferEndDelegate == null){
                        alert("successful transaction.");
                    } else {
                        this.transferEndDelegate(true);
                    }
                } else {
                    alert(res.data.error);
                    this.transferEndDelegate(false);
                }
            })
            .catch((ex) => {
                this.delay(1000).then((v) => {
                    this.checkTransactionStatus(txHash, chainId, tryNumber);
                    if (tryNumber > 3) {
                        alert(ex);
                        this.transferEndDelegate(false);
                        return;
                    }
                });
            });
    }


    raiseError(ex: any) {
        let data = '';
        if (ex.response != undefined && ex.response.data != undefined) {
            alert(ex.response.data);
        } else if (ex.body != undefined && ex.body.getReader != undefined) {
            const reader = ex.body.getReader();
            data = this.readStream(reader, data);
            alert(data);
        } else {
            console.log(ex);
            alert('Unexpected error is occured.');
        }
    }

    readStream(reader: any, data: string): string {
        return reader.read().then(({ done, value }) => {
            if (done) {
                return data;
            }
            data += new TextDecoder().decode(value);
            return this.readStream(reader, data);
        });
    }

    openModal(modalService: NgbModal, content, type, modalDimension) {
        if (modalDimension === 'sm' && type === 'modal_mini') {
            modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else if (modalDimension == undefined && type === 'Login') {
            modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else {
            modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }

    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}