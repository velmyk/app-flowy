export default class PlantsService {
	constructor(localStorageService) {
		'ngInject';

		this.localStorageService = localStorageService;
	}

	createPlant(newPlant) {
		let plantsList = this.localStorageService.get('plants');
		plantsList = plantsList ? plantsList : [];
		plantsList.push(newPlant);
		this.localStorageService.set('plants', plantsList);
	}

	getAllPlants() {
		return this.localStorageService.get('plants');
	}
}