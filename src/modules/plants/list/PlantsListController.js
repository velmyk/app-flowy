export default class PlantsListController {
	constructor($state,
				plants) {
		'ngInject';

		this.$state = $state;
		this.plants = plants;
	}

	modifyPlant(plantId) {
		this.$state.go('^.modify', { plantId: plantId} );
	}
}