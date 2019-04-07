import { Component } from "@angular/core";
import { ProviderService } from "./provider.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "client";

  constructor(private providerService: ProviderService) {}
}
