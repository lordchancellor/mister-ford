import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { MenuEventService } from './services/menu-event.service';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuButtonComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [MenuEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
