import rootTemplate from './main.html';
import headerTemplate from './header.html';
import MainController from './mainController';

export default function mainRoutes($stateProvider) {
    'ngInject';

    $stateProvider
        .state('main', {
            url: '/',
            views: {
                '': {
                    template: rootTemplate
                },
                'header@main': {
                    template: headerTemplate
                },
                'content@main': {
                    template: '<div>Hello main!</div>',
                    controller: MainController
                }
            }
        });
};
