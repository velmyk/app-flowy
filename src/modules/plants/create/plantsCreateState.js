import PlantsCreateController from './PlantsCreateController';
import contentTemplate from './plants-create-content.html';
import headerTemplate from './plants-create-header.html';

export default {
    url: '/create',
    views: {
        'content@main': {
            template: contentTemplate,
            controller: PlantsCreateController,
            controllerAs: 'plantsCreateCtrl'
        },
        'header@main': {
        	template: headerTemplate
        }
    }
};