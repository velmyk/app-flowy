import PlantsListController from './PlantsListController';
import contentTemplate from './plants-list-content.html';

export default {
    url: '/list',
    views: {
        'content@main': {
            template: contentTemplate,
            controller: PlantsListController,
            controllerAs: 'plantsListCtrl'
        }
    },
    resolve: {
    	plants: getAllPlants
    }
};

function getAllPlants(PlantsService) {
	'ngInject';

	return PlantsService.getAllPlants();
}