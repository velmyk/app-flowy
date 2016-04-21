import plantsState from './plantsState';
import plantsListState from './list/plantsListState';
import plantsCreateState from './create/plantsCreateState';
import plantsModifyState from './modify/plantsModifyState';

export default function plantsRoutes($stateProvider) {
    'ngInject';

    $stateProvider
        .state('main.plants', plantsState)
        .state('main.plants.list', plantsListState)
        .state('main.plants.create', plantsCreateState)
        .state('main.plants.modify', plantsModifyState)

}
