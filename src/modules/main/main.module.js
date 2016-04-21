import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './mainRoutes';

export default angular.module('app.main', [uirouter])
    .config(routes)
    .name;