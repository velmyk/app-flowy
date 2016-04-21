import PlantsCreateController from './PlantsCreateController';
import contentTemplate from './plants-create-content.html';

export default {
    url: '/create',
    views: {
        'content@main': {
            template: contentTemplate,
            controller: PlantsCreateController,
            controllerAs: 'plantsCreateCtrl'
        }
    }
};