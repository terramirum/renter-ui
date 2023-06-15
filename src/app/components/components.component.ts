import { Component, OnInit, Renderer2, OnDestroy, NgModule } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { Rental } from '../../service/Rental';
import { RequestParams } from '../../service/http-client';
import { NftClass } from 'service/data-contracts';
import { HeaderParams, TerraConstants } from './contants';
import { Param } from 'service/Param';
import { BasePageComponent } from './components.base';

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
        private config: NgbAccordionConfig,
        private rental: Rental,
        private param: Param) {
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
        this.param.paramchain().then((res) => {
            console.log(res)
        }).catch((reason) => {
            this.raiseError(reason);
        });;

        const query = {
            /** Chain id */
            chainid: TerraConstants.chainId,
            /** contract owner */
            contractowner: TerraConstants.contractOwner
        };

        this.rental.rentalclasses(query).then((res) => {
            this.nftClasses = res.data.nftClasses
        }).catch((reason) => {
            alert(reason);
            this.raiseError(reason);
        });
    }

    ngOnDestroy() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
}
