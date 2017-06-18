import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mf-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @Output() menuEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuEvent.emit();
  }

}
