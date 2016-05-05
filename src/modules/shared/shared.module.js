import angular from 'angular';

import StrangeService from './StrangeService';

export default angular.module('shared', [])
	.service('StrangeService', StrangeService)
    .name;