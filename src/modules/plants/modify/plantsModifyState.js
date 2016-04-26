import PlantsModifyController from './PlantsModifyController';
import contentTemplate from './plants-modify-content.html';

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
        }
    }
};

function getPlant(PlantsService,
                  $stateParams) {
    'ngInject';

    return PlantsService.getPlantById($stateParams.plantId);
};