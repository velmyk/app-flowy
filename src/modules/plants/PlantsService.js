export default class PlantsService {
	constructor(localStorageService) {
		'ngInject';

		this.localStorageService = localStorageService;
	}

	createPlant(newPlant) {
		let plantsList = this.localStorageService.get('plants');
		plantsList = plantsList ? plantsList : [];
		plantsList.push(this.assignId(newPlant));
		this.localStorageService.set('plants', plantsList);
	}

	getAllPlants() {
		return this.localStorageService.get('plants');
	}

	assignId(plant) {
		plant.id = new Date().getTime();
		return plant;
	}

	getPlantById(plantId) {
		let allPlants = this.localStorageService.get('plants');
		return allPlants.find(plant => plant.id === plantId);
	}
}