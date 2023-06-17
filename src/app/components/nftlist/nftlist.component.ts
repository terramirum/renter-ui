import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { BasePageComponent } from '../components.base';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { TerraConstants } from '../contants';
import { NftDetail, NftDetailResponse } from 'app/models/data-contracts';
import axios from 'axios';

@Component({
  selector: 'app-nftlist',
  templateUrl: './nftlist.component.html',
  styleUrls: ['./nftlist.component.scss']
})
export class NftListComponent extends BasePageComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;
  symbol: string;
  nftDetails: Array<NftDetail>;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.symbol = params['symbol'];
      this.getNfts(TerraConstants.chainId, this.symbol);
    });

    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }


  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  getNfts(chainId: string, symbol: string) {
    let uri = this.rentalNftsUri;
    uri = uri.replace("{chainid}", chainId)
    uri = uri.replace("{currency}", symbol)
    axios.get<NftDetailResponse>(uri)
      .then((res) => { 
        this.nftDetails = res.data.nftDetails; 
        console.log(this.nftDetails);
      })
      .catch((ex) => { 
        this.raiseError(ex);
      });
  }
}
