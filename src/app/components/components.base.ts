import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { UpdateChainSettle } from "service/data-contracts";
import { HttpResponse } from "service/http-client";

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
    mintToken = this.basePath + "wallet/deposit";
    nftList = this.basePath + "rental/nfts?chainid={chainid}&classid={classid}"
    txDetail = this.basePath + "tx/detail?txhash={txHash}&chainid={chainId}";
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

        let tx = this.txDetail;
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