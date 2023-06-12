import { BaseAPIRequestFactory } from "services/apis/baseapi";  
import { Configuration } from '../services/configuration';

export class ApiFactory extends BaseAPIRequestFactory {
    constructor() {
        const configuration: Configuration = {
            baseServer: undefined,
            httpApi: undefined,
            middleware: [],
            authMethods: {
                default: undefined,
                api_key: undefined,
                oauth2: undefined
            }
        }; 
        super(configuration)
    }
}