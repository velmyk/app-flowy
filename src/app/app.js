import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngLocalStorage from 'angular-local-storage';
import 'ng-cordova';

import modules from '../modules/modules';
import router from './router';

angular.module('app', [
        ...modules,
        uirouter,
        ngMaterial,
        ngLocalStorage,
        'ngCordova'
    ])
    .config(router);