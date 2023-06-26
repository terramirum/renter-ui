import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TerraConstants } from '../contants';
import { FormControl, FormGroup } from '@angular/forms';
import { BasePageComponent } from '../components.base';
import { BalanceRequest, BalanceResponse, NftRentMintRequest, TransferResponse } from 'app/models/data-contracts';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { TransferRequest, MintRequest } from '../../models/data-contracts';
import { NgbCalendar, NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-nftrent',
  templateUrl: './nftrent.component.html',
  styleUrls: ['./nftrent.component.css'],
})



export class NftRentComponent extends BasePageComponent implements OnInit, AfterViewInit {
  @ViewChild('classic', { static: true }) classic: NgbModal;
  @ViewChild('rentnftmodal', { static: true }) rentnftmodal: NgbModal;

  startDate: string;
  endDate: string;
  usdBalance: string;
  totalAmount: string;

  chainId: string;
  contractOwner: string;
  data: Date = new Date();
  focus;
  focus1;
  rentMintRequest: NftRentMintRequest = new NftRentMintRequest();
  transferRequest: TransferRequest = new TransferRequest();
  inputForm = new FormGroup({});
  additionalControls: string[] = ["description", "uri"];
  currency: string;
  nftId: string;
  renter: string;
  renters: string[] = [];
  balances: BalanceResponse[];
  withdrawalForm = new FormGroup({});
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  formatter: any;

  constructor(private route: ActivatedRoute,
    private modalService: NgbModal,
    private calendar: NgbCalendar) {
    super();
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit() {
    // $(this.rentedDate).daterangepicker({
    //   timePicker: true,
    //   startDate: moment().startOf('hour'),
    //   endDate: moment().startOf('hour').add(32, 'hour'),
    //   locale: {
    //     format: 'M/DD hh:mm A'
    //   }
    // });

    this.renters = TerraConstants.Renters;
    //this.deployRequest.txKey = "1";
    const date = (new Date());
    const mDate = moment(date);
    this.startDate = mDate.add(15, 'minutes').format('YYYYMMDDHHmm');
    this.endDate = mDate.add(30, 'minutes').format('YYYYMMDDHHmm');

    this.setTransferEndDelegate(this.delegateTransferEnd);

    Object.keys(this.rentMintRequest).forEach(name => {
      this.inputForm.addControl(name, new FormControl(this.rentMintRequest[name]));
    });

    Object.keys(this.transferRequest).forEach(name => {
      this.withdrawalForm.addControl(name, new FormControl(this.transferRequest[name]));
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
      this.balance();
    });
  }

  ngAfterViewInit() {

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

  balance() {
    if (this.renter != undefined && this.renter.length > 0) {
      let balanceRequest = new BalanceRequest();
      balanceRequest.address = this.renter;
      balanceRequest.chainId = this.chainId;
      axios.post<BalanceResponse[]>(this.balanceUri, balanceRequest).then((res) => {
        this.balances = res.data;
      }).catch((ex) => {
        this.raiseError(ex);
      });
    } else {
      alert('Select any renter.');
    }
  }

  delegateTransferEnd(ret: boolean, responseMessage: string) {
    if (ret) {
      this.balance();
      this.modalService.dismissAll();
      if (responseMessage != undefined && responseMessage.length > 0)
        alert(responseMessage);
    }
  }

  withdraw() {
    this.transferRequest = <TransferRequest>this.withdrawalForm.value;
    this.transferRequest.chainId = this.chainId;
    this.transferRequest.fromAddress = this.renter;
    this.transferRequest.txKey = "1";
    this.transferRequest.memo = " ";
    this.transfer(this.transferRequest);
  }

  withdrawModal(currency: string) {
    this.withdrawalForm.controls["amount"].value = "";
    this.withdrawalForm.controls["currency"].value = currency;
    this.openModal(this.modalService, this.classic, '', '');
  }

  faucet(currency: string) {
    let req = new TransferRequest();
    req.amount = "10000000";
    req.chainId = this.chainId;
    req.currency = currency;
    req.fromAddress = TerraConstants.contractOwner;
    req.toAddress = this.renter;
    req.txKey = "1";
    req.memo = " ";
    this.transfer(req);
  }

  rentNftModal() {
    let usd = "0";
    this.balances.forEach((item) => {
      if (item.currency == "TUSD") {
        usd = this.getFormatedAmount(item.amount, Number(item.currency))
      }
    });

    this.usdBalance = usd;
    this.totalAmount = "20";

    this.openModal(this.modalService, this.rentnftmodal, '', '');
  }

  rentEnable(): Boolean {
    if (Number(this.totalAmount) > Number(this.usdBalance)) {
      return false;
    }
    return true;
  }

  rentNft() {
    // const controls = this.inputForm.controls;
    // if (this.inputForm.invalid) {
    //   Object.keys(this.rentMintRequest).forEach(name =>
    //     controls[name].markAsTouched()
    //   );
    //   return;
    // }
    // this.saving = true;
    // const req = <any>this.inputForm.value;
    // this.rentMintRequest = <NftRentMintRequest>this.inputForm.value;

    let mintRequest = new NftRentMintRequest();
    mintRequest.chainId = this.chainId;
    mintRequest.currency = this.currency;
    mintRequest.endDate = Number(this.endDate);
    mintRequest.nftId = this.nftId;
    mintRequest.renter = this.renter;
    mintRequest.startDate = Number(this.startDate);
    mintRequest.txKey = "1";
    console.log(mintRequest);

    axios.post<TransferResponse>(this.rentalRentNftMintUri, mintRequest)
      .then((res) => {
        this.checkTransactionStatus(res.data.txnHash, mintRequest.chainId, 0);
      })
      .catch((ex) => {
        this.raiseError(ex);
      });
  }

  sessions(){
    let tx = this.rentalSessionsUri;
    tx = tx.replace("{chainId}", chainId);
    tx = tx.replace("{txHash}", txHash); 
    axios.get<UpdateChainSettle>(tx).then((res) => {
      
    }).catch((ex)=>{
      this.raiseError(ex);
    });
  }

  getFormatedAmount(amount: number, precision: number): string {
    const amt = amount / Math.pow(10, precision)
    return amt.toLocaleString('en-us', { minimumFractionDigits: precision })
  }


}

