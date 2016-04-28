export default class PlantsService {
	constructor(localStorageService) {
		'ngInject';

		this.localStorageService = localStorageService;
	}

	savePlant(newPlant) {
		let plantsList = this.localStorageService.get('plants');
		plantsList = plantsList ? plantsList : [];
		plantsList.push(newPlant);
		this.localStorageService.set('plants', plantsList);
	}

	getAllPlants() {
		return this.localStorageService.get('plants');
	}

	getPlantById(plantId) {
		let allPlants = this.localStorageService.get('plants');
		return allPlants.find(plant => plant.id === plantId);
	}

	deletePlant(plant) {
		let indexToDelete,
			plantsList = this.localStorageService.get('plants');

		plantsList.forEach((item, index) => {
			if(item.id === plant.id) {
				indexToDelete = index;
			}
		});
		plantsList.splice(indexToDelete, 1);
		this.localStorageService.set('plants', plantsList);
	}

	updatePlant(data) {
		let indexToUpdate,
			plantsList = this.getAllPlants(),
			newPlant;

		plantsList.forEach((item, index) => {
			if(item.id === data.id) {
				indexToUpdate = index;
			}
		});

		plantsList[indexToUpdate] = Object.assign(plantsList[indexToUpdate], data);

		this.localStorageService.set('plants', plantsList);
	}

}