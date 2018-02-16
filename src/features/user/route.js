// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import {
  Profil,
  Settings,
} from './';

import {
  Historic as HistoricBooking,
  List as ListBooking
} from '../booking'

export default {
  path: 'user',
  name: 'User',
  childRoutes: [
    { path: 'profil', name: 'Profil', component: Profil},
    { path: 'settings', name: 'Settings', component: Settings },
    { path: 'booking', name: 'Booking', component: ListBooking},
    { path: 'historic', name: 'Event - Historic', component: HistoricBooking},
  ],
};
