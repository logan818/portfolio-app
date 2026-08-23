import { Routes } from '@angular/router';
import { Experience } from './components/experience/experience';
import { Home } from './components/home/home';

export const routes: Routes = [
  {path: '', component: Home },
  {path: 'experience', component: Experience },
];
