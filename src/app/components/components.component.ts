import { Component, OnInit, Renderer2, OnDestroy, NgModule } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax'; 
import { NftClass, NftClassResponse } from 'app/models/data-contracts';
import { TerraConstants } from './contants'; 
import { BasePageComponent } from './components.base';
import axios from 'axios';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent extends BasePageComponent implements OnInit, OnDestroy {
    data: Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;
    nftClasses: Array<NftClass>

    date: { year: number, month: number };
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;

    constructor(private renderer: Renderer2,
        private config: NgbAccordionConfig) {
        super();
        config.closeOthers = true;
        config.type = 'info';
    }

    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
        this.laodClasses();

    }

    laodClasses() {
        let tx = this.rentalClassesUri;
        tx = tx.replace("{chainid}", TerraConstants.chainId)
        tx = tx.replace("{contractowner}", TerraConstants.contractOwner)
        axios.get<NftClassResponse>(tx)
            .then((res) => {
                this.nftClasses = res.data.nftClasses
            })
            .catch((ex) => {
                this.raiseError(ex);
            });
    }

    ngOnDestroy() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
}
