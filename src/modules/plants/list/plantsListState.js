import PlantsListController from './PlantsListController';
import contentTemplate from './plants-list-content.html';
import headerTemplate from './plants-list-header.html';

export default {
    url: '/list',
    views: {
        'content@main': {
            template: contentTemplate,
            controller: PlantsListController,
            controllerAs: 'plantsListCtrl'
        },
        'header@main': {
            template: headerTemplate
        }
    },
    resolve: {
    	plants: getAllPlants
    }
};

function getAllPlants(PlantsResource) {
	'ngInject';

	return PlantsResource.getAllPlants();
}