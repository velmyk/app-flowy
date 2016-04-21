import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './plantsRoutes';

export default angular.module('app.plants', [uirouter])
    .config(routes)
    .name;