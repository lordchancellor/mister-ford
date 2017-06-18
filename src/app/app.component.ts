import { Component } from '@angular/core';

import { MenuEventService } from './services/menu-event.service';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  open: boolean;
  currentYear: number;

  constructor(private menuEventService: MenuEventService) {
    this.currentYear = new Date().getFullYear();

    menuEventService.changeEmitted.subscribe(() => this.toggleMenu());
  }

  ngOnInit() {
    this.open = false;
  }

  toggleMenu() {
    this.open = !this.open;
  }
}
