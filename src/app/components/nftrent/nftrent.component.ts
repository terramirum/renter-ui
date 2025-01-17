import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TerraConstants } from '../contants';
import { FormControl, FormGroup } from '@angular/forms';
import { BasePageComponent } from '../components.base';
import { BalanceRequest, BalanceResponse, NftAccessRequest, NftGiveAccessRequest, NftRentDate, NftRentMintRequest, NftSendSessionRequest, NftSessionResponse, TransferResponse, UpdateChainSettle } from 'app/models/data-contracts';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { TransferRequest } from '../../models/data-contracts';
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
  @ViewChild('grantaccess', { static: true }) grantaccessmodal: NgbModal;
  @ViewChild('sendsession', { static: true }) sendsessionmodal: NgbModal;

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
  nftRentDates: NftRentDate[];
  nftRentDateAll: NftRentDate[];

  withdrawalForm = new FormGroup({});
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  formatter: any;

  sendSessionRentDates: NftRentDate
  grantAccessRentDates: NftRentDate
  newSendRenter: string = '';
  newGrant: string = '';

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
      this.walletSessions();
      this.allSessions();
    } else {
      alert('Select any renter.');
    }
  }

  delegateRentTransferEnd(ret: boolean, responseMessage: string, chainSettle: UpdateChainSettle) {
    if (ret) {
      this.modalService.dismissAll();
      if (chainSettle.isSuccessful) {
        let mintRequest = new NftRentMintRequest();
        mintRequest.chainId = this.chainId;
        mintRequest.currency = this.currency;
        mintRequest.endDate = Number(this.endDate);
        mintRequest.nftId = this.nftId;
        mintRequest.renter = this.renter;
        mintRequest.startDate = Number(this.startDate);
        mintRequest.txKey = "1";

        axios.post<TransferResponse>(this.rentalRentNftMintUri, mintRequest)
          .then((res) => {
            this.setTransferEndDelegate(this.delegateTransferEnd);
            this.checkTransactionStatus(res.data.txnHash, mintRequest.chainId, 0);
          })
          .catch((ex) => {
            this.raiseError(ex);
          });
      } else if (responseMessage != undefined && responseMessage.length > 0)
        alert(responseMessage + "\n" + chainSettle.error);
      else {
        alert(chainSettle.error);
      }
    } else[
      alert("Error with transfer " + ret + responseMessage)
    ]
  }

  delegateTransferEnd(ret: boolean, responseMessage: string, chainSettle: UpdateChainSettle) {
    if (ret) {
      this.balance();
      this.modalService.dismissAll();
      if (responseMessage != undefined && responseMessage.length > 0)
        alert(responseMessage);
    }
  }

  delegateHasAccess(ret: boolean, responseMessage: string, chainSettle: UpdateChainSettle) {
    if (ret) {
      if (chainSettle.currency == "1")
        alert("Accessing Successful");
      else
        alert("No Access !!!");
    }
  }

  withdraw() {
    this.transferRequest = <TransferRequest>this.withdrawalForm.value;



    this.transferRequest.amount = Math.trunc(parseFloat(this.transferRequest.amount) * Math.pow(10, 6)).toString()
    this.transferRequest.chainId = this.chainId;
    this.transferRequest.fromAddress = this.renter;
    this.transferRequest.txKey = "1";
    this.transferRequest.memo = " ";
    this.setTransferEndDelegate(this.delegateTransferEnd);
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
        usd = String(item.amount / 1000000);// this.getFormatedAmount(item.amount, Number(item.currency))
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
    if (Number(this.totalAmount) > Number(this.usdBalance)) {
      alert("Not enough balance to purchase rent.");
      return;
    }

    let req: TransferRequest = new TransferRequest();
    req.chainId = TerraConstants.chainId;
    req.amount = String(Number(this.totalAmount) * 1000000);
    req.currency = "TUSD";
    req.fromAddress = this.renter;
    req.toAddress = TerraConstants.contractOwner;
    req.txKey = "1";
    this.setTransferEndDelegate(this.delegateRentTransferEnd);
    this.transfer(req);
  }

  walletSessions() {
    let tx = this.rentalWalletSessionsUri;
    tx = tx.replace("{chainid}", TerraConstants.chainId);
    tx = tx.replace("{renter}", this.renter);
    axios.get<NftSessionResponse>(tx).then((res) => {
      this.nftRentDates = res.data.nftRentDates;
    }).catch((ex) => {
      this.raiseError(ex);
    });
  }

  allSessions() {
    let tx = this.rentalSessionAllUri;
    tx = tx.replace("{chainid}", TerraConstants.chainId);
    tx = tx.replace("{nftid}", this.nftId);
    tx = tx.replace("{currency}", this.currency);
    axios.get<NftSessionResponse>(tx).then((res) => {
      this.nftRentDateAll = res.data.nftRentDates;
    }).catch((ex) => {
      this.raiseError(ex);
    });
  }


  getFormatedAmount(amount: number, precision: number): string {
    const amt = amount / Math.pow(10, precision)
    return amt.toLocaleString('en-us', { minimumFractionDigits: precision })
  }

  sendSessionModal(rentDates: NftRentDate) {
    console.log(rentDates);
    this.sendSessionRentDates = rentDates;
    this.openModal(this.modalService, this.sendsessionmodal, '', '');
  }

  sendSession() {
    let sendSessionRequest = new NftSendSessionRequest();
    sendSessionRequest.chainId = this.chainId;
    sendSessionRequest.currency = this.currency;
    sendSessionRequest.sessionId = this.sendSessionRentDates.sessionId;
    sendSessionRequest.nftId = this.nftId;
    sendSessionRequest.renter = this.renter;
    sendSessionRequest.newRenter = this.newSendRenter;
    sendSessionRequest.txKey = "1";
    console.log(sendSessionRequest);

    axios.post<TransferResponse>(this.rentalNftSendSessionUri, sendSessionRequest)
      .then((res) => {
        this.setTransferEndDelegate(this.delegateTransferEnd);
        this.checkTransactionStatus(res.data.txnHash, sendSessionRequest.chainId, 0);
      })
      .catch((ex) => {
        this.raiseError(ex);
      });
  }


  grantAccessModal(rentDates: NftRentDate) {
    this.grantAccessRentDates = rentDates;
    this.openModal(this.modalService, this.grantaccessmodal, '', '');
  }

  grantAccess() {
    let giveAccessRequest = new NftGiveAccessRequest();
    giveAccessRequest.chainId = this.chainId;
    giveAccessRequest.currency = this.currency;
    giveAccessRequest.sessionId = this.grantAccessRentDates.sessionId;
    giveAccessRequest.nftId = this.nftId;
    giveAccessRequest.renter = this.renter;
    giveAccessRequest.newRenter = this.newGrant;
    giveAccessRequest.txKey = "1";
    axios.post<TransferResponse>(this.rentalNftGiveAccessUri, giveAccessRequest)
      .then((res) => {
        this.setTransferEndDelegate(this.delegateTransferEnd);
        this.checkTransactionStatus(res.data.txnHash, giveAccessRequest.chainId, 0);
      })
      .catch((ex) => {
        this.raiseError(ex);
      });
  }

  hasAccess(rentDates: NftRentDate) {
    let accessRequest = new NftAccessRequest();
    accessRequest.chainId = this.chainId;
    accessRequest.currency = this.currency;
    accessRequest.nftId = this.nftId;
    accessRequest.renter = this.renter;
    accessRequest.txKey = "1";
    axios.post<TransferResponse>(this.rentalNftAccessUri, accessRequest)
      .then((res) => {
        this.setTransferEndDelegate(this.delegateHasAccess);
        this.checkTransactionStatus(res.data.txnHash, accessRequest.chainId, 0);
      })
      .catch((ex) => {
        this.raiseError(ex);
      });
  }

  getFormattedDate(str: string) {
    const date = moment(str, 'YYYYMMDDhhmm').toDate();
    return date.toDateString() + " - " + date.toLocaleTimeString()
  }
}

