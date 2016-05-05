import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './strangeRoutes';

export default angular.module('app.strange', [uirouter])
    .config(routes)
    .name;