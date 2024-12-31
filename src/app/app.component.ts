import { Component } from "@angular/core";
import { WsComponent } from "./ws/ws.component";

@Component({
  selector: "app-root",
  imports: [WsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  private interval: number = 1;
  title = "ng-websocket";
}
