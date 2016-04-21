import rootTemplate from './main.html';
import headerTemplate from './header.html';

export default function mainRoutes($stateProvider) {
    'ngInject';

    $stateProvider
        .state('main', {
            url: '',
            abstaract: true,
            views: {
                '': {
                    template: rootTemplate
                },
                'header@main': {
                    template: headerTemplate
                }
            }
        });
};
