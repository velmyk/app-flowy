import rootTemplate from './main.html';
import headerTemplate from './header.html';
import contentTemplate from './content.html';

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
                },
                'content@main': {
                    template: contentTemplate
                }
            }
        });
};
