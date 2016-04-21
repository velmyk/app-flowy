import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './plantsRoutes';

import PlantsService from './PlantsService';

export default angular.module('app.plants', [uirouter])
	.service('PlantsService', PlantsService)
    .config(routes)
    .name;