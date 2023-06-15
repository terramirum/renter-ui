import { Component, OnInit } from '@angular/core';
import { TerraConstants } from '../contants';
import { FormControl, FormGroup } from '@angular/forms';
import { CMintRequest as CDeployRequest, CNftRentMintRequest } from 'app/models/Contract';
import { Contract } from '../../../service/Contract';
import { BasePageComponent } from '../components.base';
import { Rental } from 'service/Rental';

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
  rentMintRequest: CNftRentMintRequest = new CNftRentMintRequest();
  inputForm = new FormGroup({});
  additionalControls: string[] = ["description", "uri"];

  constructor(private rental: Rental) {
    super();
  }



  ngOnInit() {
    this.rentMintRequest.chainId = TerraConstants.chainId;
    this.rentMintRequest.currency = TerraConstants.contractOwner; 
    //this.deployRequest.txKey = "1";

    Object.keys(this.rentMintRequest).forEach(name => {
      this.inputForm.addControl(name, new FormControl(this.rentMintRequest[name]));
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
      Object.keys(this.rentMintRequest).forEach(name =>
        controls[name].markAsTouched()
      ); 
      return;
    }
    this.saving = true;
    const req = <any>this.inputForm.value;
    this.rentMintRequest = <CNftRentMintRequest>this.inputForm.value;
 
    this.rental.nftRentMintRequest(this.rentMintRequest).then((res) => {
      alert(res);
    }).catch((ex) => {
      this.raiseError(ex);
    });
  }
}
