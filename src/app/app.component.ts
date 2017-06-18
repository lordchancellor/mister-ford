import { Component } from '@angular/core';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  open: boolean;

  ngOnInit() {
    this.open = false;
  }

  toggleMenu() {
    this.open = !this.open;
  }
}
