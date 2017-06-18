import { Component, OnInit } from '@angular/core';

import { MenuEventService } from './../../services/menu-event.service';

@Component({
  selector: 'mf-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(private menuEventService: MenuEventService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuEventService.emitChange();
  }

}
