import { Component, OnInit } from '@angular/core';
import { TerraConstants } from '../contants';
import { FormControl, FormGroup } from '@angular/forms';
import { BasePageComponent } from '../components.base';
import { DeployRequest, TransferResponse, VerifyContractRequest } from 'app/models/data-contracts';
import axios from 'axios';

@Component({
  selector: 'app-defineplace',
  templateUrl: './defineplace.component.html'
})

export class DefinePlaceComponent extends BasePageComponent implements OnInit {
  chainId: string;
  contractOwner: string;
  data: Date = new Date();
  focus;
  focus1;
  saving = false;
  deployRequest: DeployRequest = new DeployRequest();
  inputForm = new FormGroup({});
  additionalControls: string[] = ["description", "uri", "avatarUri"];


  constructor() {
    super();
  }



  ngOnInit() {
    this.deployRequest.chainId = TerraConstants.chainId;
    this.deployRequest.contractOwner = TerraConstants.contractOwner;
    this.deployRequest.manageType = "3";
    this.deployRequest.contractName = "2 Bed Flat, Merino Gardens, E1W";
    this.deployRequest.tokenName = "MERINOGARDEN";
    //this.deployRequest.txKey = "1";

    Object.keys(this.deployRequest).forEach(name => {
      this.inputForm.addControl(name, new FormControl(this.deployRequest[name]));
    });
    // this.additionalControls.forEach(element => {
    //    this.inputForm.addControl(element, new FormControl(''));
    // });

    let des: string = "Nestled in the heart of Wapping, Merino Gardens is an incredible newly built residential development which has access to seven and a half acres of open landscapes spaceand luxury spa and gym facilities. This 2 bedroom, 2 balcony apartment boasts a spacious and modern open plan kitchen and reception area. Both of the bedrooms boast generous proportions and the two bathrooms encompass contemporary design The development has an incredible location with fantastic Zone 1 transport links within walking distance.</p>";
    let uri: string = "https://www.openrent.co.uk/property-to-rent/london/2-bed-flat-merino-gardens-e1w/1744733";
    let avatarUri: string ="https://d36pgh4m67wnlt.cloudfront.net/listings/1744733/o_1h3kssbhu2121qtk1671169n189d8.JPG";
    this.inputForm.addControl("description", new FormControl(des));
    this.inputForm.addControl("uri", new FormControl(uri));
    this.inputForm.addControl("avatarUri", new FormControl(avatarUri));

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
      Object.keys(this.deployRequest).forEach(name =>
        controls[name].markAsTouched()
      );
      this.additionalControls.forEach(element => {
        controls[element].markAsTouched()
      });
      return;
    }
    this.saving = true;
    const req = <any>this.inputForm.value;
    this.deployRequest = <DeployRequest>this.inputForm.value;
    this.deployRequest.contractPatameters = [
      { name: "DESCRIPTION", value: req.description }, 
      { name: "URI", value: req.uri },
      { name: "AVATARURI", value: req.avatarUri }
    ]
    this.deployRequest.manageType = "3";
    this.deployRequest.txKey = "1";
    this.deployRequest.contractTemplate = "X";
    axios.post<TransferResponse>(this.contractDeployUri, this.deployRequest).then((res) => {
      this.delay(3000).then((v) => {
        this.verifyContract(this.deployRequest, 0);
      });
    }).catch((ex) => {
      this.raiseError(ex);
    });
  }

  verifyContract(deployRequest: DeployRequest, counter: number) {
    let verifyRequest = new VerifyContractRequest();
    verifyRequest.chainId = deployRequest.chainId;
    verifyRequest.currency = deployRequest.tokenName;

    axios.post<TransferResponse>(this.contractVerifyUri, verifyRequest).then((res) => {
      alert(res.data);
    }).catch((ex) => {
      this.delay(2000).then((v) => {
        counter++;
        this.verifyContract(deployRequest, counter);
        if (counter > 2) {
          this.raiseError(ex);
        }
      });
    })
  }
}
