export default class PlantsCreateController {
	constructor(PlantsService) {
		'ngInject';
		this.PlantsService = PlantsService;
	}

	createPlant() {
		this.PlantsService.createPlant();
	}
}