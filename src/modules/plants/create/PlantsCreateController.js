export default class PlantsCreateController {
	constructor(PlantsService) {
		'ngInject';
		this.PlantsService = PlantsService;
		this.input = {};
	}

	createPlant() {
		this.PlantsService.createPlant(this.input);
	}
}