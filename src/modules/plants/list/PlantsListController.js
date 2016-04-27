export default class PlantsListController {
	constructor($state,
				PlantsService,
				plants) {
		'ngInject';

		this.$state = $state;
		this.plants = plants;
		this.PlantsService = PlantsService;

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

	deletePlant(plant,  $event) {
		$event.stopPropagation();
		this.PlantsService.deletePlant(plant);
	}
}