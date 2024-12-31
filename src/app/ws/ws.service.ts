import { Injectable } from "@angular/core";
import { Observable, timer, Subject, EMPTY } from "rxjs";
import { io } from "socket.io-client";

export const WS_ENDPOINT = "http://localhost:3011";
export const RECONNECT_INTERVAL = 2000;

export interface User {
  userId: string;
  username: string;
}

@Injectable({
  providedIn: "root",
})
export class WebSocketService {
  socket: any;

  connect(): void {
    this.socket = io(WS_ENDPOINT);

    this.socket.on("connect", () => {
      console.log("Connected to server!!");
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
  }

  onMessage(callback: (message: User) => void): void {
    this.socket.on("user.created", callback);
  }
}
