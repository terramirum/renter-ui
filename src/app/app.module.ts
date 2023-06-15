import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Rental } from '../service/Rental';
import { Wallet } from '../service/Wallet';
import { Param } from 'service/Param';
import { DefinePlaceComponent } from './components/defineplace/defineplace.component';
import { Contract } from 'service/Contract';
import { NftDefineComponent } from './components/nftdefine/nftdefine.component';
import { NftRentComponent } from './components/nftrent/nftrent.component';
import { CommonModule } from '@angular/common';
import { NftListComponent } from './components/nftlist/nftlist.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DefinePlaceComponent,
        NftDefineComponent,
        NftRentComponent,
        NftListComponent,
    ],
    imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        CommonModule,
    ],
    providers: [Rental, Wallet, Param, Contract],
    bootstrap: [AppComponent]
})
export class AppModule { }
