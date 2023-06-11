import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContractApi, DefaultApi, RentApi, WalletApi } from '../services'; 
import { DefaultApiRequestFactory } from 'services/apis/DefaultApi';
import { RentApiRequestFactory } from 'services/apis/RentApi';
import { ContractApiRequestFactory } from 'services/apis/ContractApi';
import { WalletApiRequestFactory } from 'services/apis/WalletApi';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule
    ],
    providers: [
        {
            provide:DefaultApi,
            useFactory:DefaultApiRequestFactory 
        },
        {
            provide:RentApi,
            useFactory:RentApiRequestFactory
        },
        {
            provide:ContractApi,
            useFactory:ContractApiRequestFactory
        },
        {
            provide:WalletApi,
            useFactory:WalletApiRequestFactory
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
