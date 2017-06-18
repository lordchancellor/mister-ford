import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mf-menu-button',
  template: `
    <button md-button (click)="toggleMenu()">
      <md-icon>menu</md-icon> Menu
    </button>
  `,
  styles: []
})
export class MenuButtonComponent implements OnInit {
  @Output() menuEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuEvent.emit();
  }
}
