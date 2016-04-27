import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './plantsRoutes';

import NotificationService from './NotificationService';
import PlantsResource from './PlantsResource';
import PlantsService from './PlantsService';

export default angular.module('app.plants', [uirouter])
	.service('PlantsService', PlantsService)
	.service('NotificationService', NotificationService)
	.service('PlantsResource', PlantsResource)
    .config(routes)
    .name;