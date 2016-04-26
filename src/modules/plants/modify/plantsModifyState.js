import PlantsModifyController from './PlantsModifyController';
import contentTemplate from './plants-modify-content.html';

export default {
    url: '/modify',
    views: {
        'content@main': {
            template: contentTemplate,
            controller: PlantsModifyController,
            controllerAs: 'plantsModifyCtrl'
        }
    }
};