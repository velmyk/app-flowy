export default class PlantsCreateController {
	constructor(PlantsService,
				$state) {
		'ngInject';
		this.PlantsService = PlantsService;
		this.input = {};
		this.$state = $state;
	}

	createPlant() {
		this.PlantsService.createPlant(this.input);
		this.$state.go('^.list');
	}
}