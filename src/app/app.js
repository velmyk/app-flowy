import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import modules from '../modules/modules';
import router from './router';

angular.module('app', [
        ...modules,
        uirouter,
        ngMaterial
    ])
    .config(router);