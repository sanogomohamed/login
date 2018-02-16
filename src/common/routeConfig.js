import { App, PageNotFound } from '../features/common';
import commonRoute from '../features/common/route';
import authentificationRoute from '../features/authentification/route';
import bookingRoute from '../features/booking/route';
import eventRoute from '../features/event/route';
import userRoute from '../features/user/route';
import homeRoute from '../features/home/route';
import othersRoute from '../features/others/route';
import categoryRoute from '../features/category/route';

// NOTE: DO NOT CHANGE the 'childRoutes' name and the declaration pattern.
// This is used for Rekit cmds to register routes config for new features, and remove config when remove features, etc.
const childRoutes = [
  commonRoute,
  authentificationRoute,
  bookingRoute,
  eventRoute,
  userRoute,
  homeRoute,
  othersRoute,
  categoryRoute,
];

const routes = [{
  path: '/',
  component: App,
  childRoutes: [
    ...childRoutes,
    { path: '*', name: 'Page not found', component: PageNotFound },
  ].filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0)),
}];

// Handle isIndex property of route config:
//  Dupicate it and put it as the first route rule.
function handleIndexRoute(route) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return;
  }

  const indexRoute = route.childRoutes.find(child => child.isIndex);
  if (indexRoute) {
    const first = { ...indexRoute };
    first.path = route.path;
    first.exact = true;
    first.autoIndexRoute = true; // mark it so that the simple nav won't show it.
    route.childRoutes.unshift(first);
  }
  route.childRoutes.forEach(handleIndexRoute);
}

routes.forEach(handleIndexRoute);
export default routes;
