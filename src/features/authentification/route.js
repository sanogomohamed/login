// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import {
  LogIn,
  Register,
} from './';

export default {
  path: 'auth',
  name: 'Authentification',
  childRoutes: [
    { path: 'login', name: 'Log in', component: LogIn },
    { path: 'signup', name: 'Register', component: Register },
  ],
};
