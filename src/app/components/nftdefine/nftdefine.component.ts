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
  inputForm = new FormGroup({});
  additionalControls: string[] = ["uri"];

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

    Object.keys(this.mintRequest).forEach(name => {
      this.inputForm.addControl(name, new FormControl(this.mintRequest[name]));
    });

    this.additionalControls.forEach(element => {
      this.inputForm.addControl(element, new FormControl(''));
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
      this.additionalControls.forEach(element => {
        controls[element].markAsTouched()
      });
      return;
    }
    this.saving = true;
    const req = <any>this.inputForm.value;
    this.mintRequest = <MintRequest>this.inputForm.value;
    this.mintRequest.nftParameters = [ 
      { name: "URI", value: req.uri }, 
    ];

    console.log(this.mintRequest)
    axios.post<TransferResponse>(this.mintTokenUri, this.mintRequest)
      .then((res) => {
        this.checkTransactionStatus(res.data.txnHash, this.mintRequest.chainId, 0);
      })
      .catch((ex) => {
        alert(ex);
      });
  }

}
