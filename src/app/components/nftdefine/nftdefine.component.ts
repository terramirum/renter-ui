import { Component, OnInit } from '@angular/core';
import { TerraConstants } from '../contants';
import { FormControl, FormGroup } from '@angular/forms';
import { BasePageComponent } from '../components.base';
import { MintRequest, NftDetail, TransferResponse } from 'app/models/data-contracts';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-nftdefine',
  templateUrl: './nftdefine.component.html'
})

export class NftDefineComponent extends BasePageComponent implements OnInit {
  chainId: string;
  contractOwner: string;
  data: Date = new Date();
  focus;
  focus1;
  saving = false;
  mintRequest: MintRequest = new MintRequest();
  nftDetail: NftDetail = new NftDetail();
  inputForm = new FormGroup({});
  additionalControls: string[] = ["description", "uri"];

  constructor() {
    super();
  }



  ngOnInit() {
    this.mintRequest.chainId = TerraConstants.chainId;
    this.mintRequest.address = TerraConstants.contractOwner;
    this.mintRequest.currency = "WILLESDEN";
    this.mintRequest.txKey = "1";
    this.mintRequest.amount = "1";
    this.mintRequest.memo = " ";


    this.nftDetail.avatarUri = "https://media.rightmove.co.uk/247k/246929/134832998/246929_CAL220075_L_IMG_08_0000.jpeg";
    this.nftDetail.id = "134832998";
    this.nftDetail.uri = "https://www.rightmove.co.uk/properties/134832998";
    this.nftDetail.bedding = "2";
    this.nftDetail.wireless = true;
    this.nftDetail.type = "all inclusive";

    Object.keys(this.mintRequest).forEach(name => {
      this.inputForm.addControl(name, new FormControl(this.mintRequest[name]));
    });

    Object.keys(this.nftDetail).forEach(name => {
      this.inputForm.addControl(name, new FormControl(this.nftDetail[name]));
    });

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  define() {
    const controls = this.inputForm.controls;
    if (this.inputForm.invalid) {
      Object.keys(this.mintRequest).forEach(name =>
        controls[name].markAsTouched()
      );

      Object.keys(this.nftDetail).forEach(name =>
        controls[name].markAsTouched()
      );
      return;
    }
    this.saving = true;
    const req = <any>this.inputForm.value;
    this.mintRequest = <MintRequest>this.inputForm.value;
    this.nftDetail = <NftDetail>this.inputForm.value;
    let detail = new NftDetail()
    detail.avatarUri = this.nftDetail.avatarUri;
    detail.bedding = this.nftDetail.bedding;
    detail.chainId = this.nftDetail.chainId;
    detail.id = this.nftDetail.id;
    detail.size = this.nftDetail.size;
    detail.type = this.nftDetail.type;
    detail.uri = this.nftDetail.uri;
    detail.wireless = this.nftDetail.wireless;
    this.mintRequest.nftDetail = detail;


    axios.post<TransferResponse>(this.mintTokenUri, this.mintRequest)
      .then((res) => {
        this.checkTransactionStatus(res.data.txnHash, this.mintRequest.chainId, 0);
      })
      .catch((ex) => {
        alert(ex);
      });
  }

}
