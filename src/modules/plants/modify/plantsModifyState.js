import PlantsModifyController from './PlantsModifyController';
import contentTemplate from './plants-modify-content.html';
import headerTemplate from './plants-modify-header.html';

export default {
    url: '/modify',
    params: {
    	plantId: null
    },
    resolve: {
        plant: getPlant
    },
    views: {
        'content@main': {
            template: contentTemplate,
            controller: PlantsModifyController,
            controllerAs: 'plantsModifyCtrl'
        },
        'header@main': {
            template: headerTemplate
        }
    }
};

function getPlant(PlantsResource,
                  $stateParams) {
    'ngInject';

    return PlantsResource.getPlantById($stateParams.plantId);
};