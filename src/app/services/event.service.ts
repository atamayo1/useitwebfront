import { Injectable, NgZone } from '@angular/core';
import { Event } from "../services/event";
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventData: any; // Save logged in user data
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) {
    this.afAuth.authState.subscribe(eventos => {
      if (eventos) {
        this.eventData = eventos;
        localStorage.setItem('eventos', JSON.stringify(this.eventData));
        JSON.parse(localStorage.getItem('eventos'));
      } else {
        localStorage.setItem('eventos', null);
        JSON.parse(localStorage.getItem('eventos'));
      }
    })
  }
}
