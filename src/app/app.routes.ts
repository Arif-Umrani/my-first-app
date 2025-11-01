import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Error404 } from './pages/error404/error404';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'services',
    component: Services
  },
  {
    path: 'contact',
    component: Contact
  },

  {
    path: '**',
    component: Error404
  },
  // todo: not found page route

  // {
  //   path: '**',
  //   component: input
  // },
];
