import {Component, NgZone, OnInit} from '@angular/core';
import {EventService} from "../../services/event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.scss']
})
export class EventosListComponent implements OnInit {

  constructor(public eventService: EventService,  public router: Router,
              public ngZone: NgZone) {

  }

  ngOnInit() {
  }

}
