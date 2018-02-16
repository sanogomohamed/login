// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import {
  List,
  Item,
} from './';

import {
  Register as RegisterBooking
} from '../booking'

import {
  List as ListCategory
} from '../category'

export default {
  path: 'event',
  name: 'Event',
  childRoutes: [
    { path: 'list', name: 'List', component: List, isIndex: true },
    { path: ':id', name: 'Item', component: Item },
    { path: ':id/booking', name: 'Booking', component: RegisterBooking },
    { path: ':id/category', name: 'Category', component: ListCategory },
  ],
};
