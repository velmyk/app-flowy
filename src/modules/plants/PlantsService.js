export default class PlantsService {
	constructor(localStoragrService) {
		'ngInject';

		this.localStoragrService = localStoragrService;
	}

	createPlant(newPlant) {
		let plantsList = this.localStoragrService.get('plants');
		plantsList = plantsList ? plantsList : [];
		plantsList.push(newPlant);
		this.localStoragrService.set('plants', plantsList);
	}
}