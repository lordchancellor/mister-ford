import { Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

export const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'about', component: AboutPageComponent }
];