import contentTemplate from './strange-content.html';
import headerTemplate from './strange-header.html';
import StrangeController from './StrangeController';

export default {
    url: 'strange',
    views: {
        'content@main': {
            template: contentTemplate,
            controller: StrangeController,
            controllerAs: 'strangeCtrl'
        },
        'header@main': {
            template: headerTemplate
        }
    }
};