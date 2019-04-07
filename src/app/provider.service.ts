import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProviderService {
  constructor(private httpClient: HttpClient) {
    console.log("Provider made");
    httpClient
      .get("http://localhost:8080/api/hello")
      .subscribe(data => console.log(data));
  }
}
