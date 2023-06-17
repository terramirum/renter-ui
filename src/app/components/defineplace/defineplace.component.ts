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
  additionalControls: string[] = ["description", "uri"];


  constructor() {
    super();
  }



  ngOnInit() {
    this.deployRequest.chainId = TerraConstants.chainId;
    this.deployRequest.contractOwner = TerraConstants.contractOwner;
    this.deployRequest.manageType = "3";
    this.deployRequest.contractName = "Estate Agents Willesden Green";
    this.deployRequest.tokenName = "WILLESDEN";
    //this.deployRequest.txKey = "1";

    Object.keys(this.deployRequest).forEach(name => {
      this.inputForm.addControl(name, new FormControl(this.deployRequest[name]));
    });
    // this.additionalControls.forEach(element => {
    //   this.inputForm.addControl(element, new FormControl(''));
    // });

    let des = "Independent Estate Agents in Willesden Green, is a highly successful privately owned estate agents. Our philosophy remains that to be successful we must provide the highest level of personalised service and be at the cutting edge of new technology. At parkinsonfarr Estate Agents, without doubt our clients come first!";
    let uri = "https://www.rightmove.co.uk/estate-agents/agent/parkinsonfarr/Willesden-Green-29643.html";
    this.inputForm.addControl("description", new FormControl(des));
    this.inputForm.addControl("uri", new FormControl(uri));

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
    this.deployRequest.contractPatameters = [{ name: "#DESCRIPTION", value: req.description }, { name: "#URI", value: req.uri }]
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
