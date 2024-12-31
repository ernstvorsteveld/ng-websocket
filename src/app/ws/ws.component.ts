import { Component, OnInit } from "@angular/core";
import { User, WebSocketService } from "./ws.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-ws",
  imports: [],
  templateUrl: "./ws.component.html",
  styleUrl: "./ws.component.css",
})
export class WsComponent implements OnInit {
  username: string = "empty";
  private messagesSubscription: Subscription = Subscription.EMPTY;

  constructor(private ws: WebSocketService) {
    console.log("WsComponent constructor");
  }

  ngOnInit() {
    this.ws.connect();

    this.ws.onMessage((message: User) => {
      console.log(message.username);
      this.username = message.username;
    });
  }
}
