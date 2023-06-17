import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { UpdateChainSettle } from "app/models/data-contracts"; 

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

    basePath = "http://localhost:7171/";
    contractDeployUri = this.basePath + "contract/deploy";
    contractVerifyUri = this.basePath + "contract/verify";
    mintTokenUri = this.basePath + "wallet/deposit";
    paramChainsUri = this.basePath + "param/chains";
    paramCoinsUri = this.basePath + "param/coins";
    rentalClassesUri = this.basePath + "rental/classes?chainid={chainid}&contractowner={contractowner}"
    rentalNftsUri = this.basePath + "rental/nfts?chainid={chainid}&classid={classid}&currency={currency}";
    rentalRentersUri = this.basePath + "rental/renters?chainid={chainid}&classid={classid}&currency={currency}&nftid={nftid}&sessionid={sessionid}";
    rentalSessionsUri = this.basePath + "rental/sessions?chainid={chainid}&classid={classid}&currency={currency}&nftid={nftid}&renter={renter}";
    rentalRentNftMintUri = this.basePath + "rental/rentnftmint";
    txDetailUri = this.basePath + "tx/detail?txhash={txHash}&chainid={chainId}";
    delay = ms => new Promise(res => setTimeout(res, ms));

    ngOnInit(): void {

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
        tx = tx.replace("{chainId}", chainId)
        tx = tx.replace("{txHash}", txHash)
        axios.get<UpdateChainSettle>(tx)
            .then((res) => {
                tryNumber++;
                if (res.data.isSuccessful) {
                    alert("successful transaction.")
                } else {
                    alert(res.data.error)
                }
            })
            .catch((ex) => {
                this.delay(1000).then((v) => {
                    this.checkTransactionStatus(txHash, chainId, tryNumber);
                    if (tryNumber > 3) {
                        alert(ex);
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
}