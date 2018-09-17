import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessengerService } from './_service/messenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'Dashboard';
    sideNavOpened = true;
    numNotifications = Math.trunc(Math.random() * 10);

    constructor(
        public router: Router,
        private messenger: MessengerService
    ) {

    }

    toggleSideNav() {
        this.sideNavOpened = !this.sideNavOpened;
        this.messenger.redraw(true);
    }

    viewNotifications() {
        this.numNotifications = undefined;
    }

}
