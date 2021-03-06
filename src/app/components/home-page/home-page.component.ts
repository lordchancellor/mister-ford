import { Component, OnInit } from '@angular/core';

import { MenuEventService } from './../../services/menu-event.service';

@Component({
  selector: 'mf-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
 
  constructor(private menuEventService: MenuEventService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuEventService.emitChange();
  }

}
