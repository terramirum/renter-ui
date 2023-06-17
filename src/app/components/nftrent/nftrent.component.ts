import { Component, OnInit } from '@angular/core';
import { TerraConstants } from '../contants';
import { FormControl, FormGroup } from '@angular/forms';
import { BasePageComponent } from '../components.base';
import { NftRentMintRequest, TransferResponse } from 'app/models/data-contracts';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nftrent',
  templateUrl: './nftrent.component.html'
})

export class NftRentComponent extends BasePageComponent implements OnInit {
  chainId: string;
  contractOwner: string;
  data: Date = new Date();
  focus;
  focus1;
  saving = false;
  rentMintRequest: NftRentMintRequest = new NftRentMintRequest();
  inputForm = new FormGroup({});
  additionalControls: string[] = ["description", "uri"];
  currency: string;
  nftId: string;
  renter: string;
  renters: string[] = [];

  constructor(private route: ActivatedRoute) {
    super();
  }



  ngOnInit() {
    this.rentMintRequest.chainId = TerraConstants.chainId;
    this.rentMintRequest.currency = TerraConstants.contractOwner;
    this.renters = TerraConstants.Renters;
    //this.deployRequest.txKey = "1";

    Object.keys(this.rentMintRequest).forEach(name => {
      this.inputForm.addControl(name, new FormControl(this.rentMintRequest[name]));
    });

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.route.params.subscribe(params => {
      this.chainId = params['chainid'];
      this.currency = params['currency'];
      this.nftId = params['nftid'];
      this.renter = params['renter']; 
    });
  }

  listRents() {
    if (this.renter.length > 0) {

    }
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
      Object.keys(this.rentMintRequest).forEach(name =>
        controls[name].markAsTouched()
      );
      return;
    }
    this.saving = true;
    const req = <any>this.inputForm.value;
    this.rentMintRequest = <NftRentMintRequest>this.inputForm.value;

    axios.post<TransferResponse>(this.rentalRentNftMintUri, this.rentMintRequest)
      .then((res) => {
        this.checkTransactionStatus(res.data.txnHash, this.rentMintRequest.chainId, 0);
      })
      .catch((ex) => {
        this.raiseError(ex);
      });
  }
}
