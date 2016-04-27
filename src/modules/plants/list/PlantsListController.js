export default class PlantsListController {
	constructor($state,
				plants) {
		'ngInject';

		this.$state = $state;
		this.plants = plants;

		this.forDelete = null;
	}

	modifyPlant(plantId) {
		this.$state.go('^.modify', { plantId: plantId} );
	}

	addNewPlant() {
		this.$state.go('^.create');
	}

	onSwipeLeft(plant) {
		this.forDelete = plant;
	}

	onSwipeRight(plant) {
		this.forDelete = null;
	}
}