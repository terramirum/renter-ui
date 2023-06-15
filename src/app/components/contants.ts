import { RequestParams } from "service/http-client";

export const TerraConstants = {
  chainId: "terramirum-localnet",
  contractOwner: "trm1z60lkcwptx4yuykdp9fqcmr56qgeqdh8h4zz3g"
}

export const HeaderParams: RequestParams = {
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json'
    // 'Authorization': 'Bearer <token>',   
  }
};