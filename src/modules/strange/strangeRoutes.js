import strangeState from './strangeState';

export default function strangeRoutes($stateProvider) {
    'ngInject';

    $stateProvider
        .state('main.strange', strangeState);

}
