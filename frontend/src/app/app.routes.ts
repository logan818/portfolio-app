import { Routes } from '@angular/router';
import { Experience } from './components/experience/experience';
import { Home } from './components/home/home';
import { Repos } from './components/repos/repos';

export const routes: Routes = [
  {path: '', component: Home },
  {path: 'experience', component: Experience },
  {path: 'repos', component: Repos },
];
