import TIME_CONSTANTS from './TIME_CONSTANTS';

export default class PlantsService {
	constructor(localStorageService,
				$cordovaLocalNotification) {

		'ngInject';

		this.localStorageService = localStorageService;
		this.$cordovaLocalNotification = $cordovaLocalNotification;
	}

	createPlant(newPlant) {
		let plantsList = this.localStorageService.get('plants');
		newPlant = this.assignId(newPlant);
		plantsList = plantsList ? plantsList : [];
		this.assignNotification(newPlant);
		plantsList.push(newPlant);
		this.localStorageService.set('plants', plantsList);
	}

	getAllPlants() {
		return this.localStorageService.get('plants');
	}

	assignId(plant) {
		plant.id = new Date().getTime();
		return plant;
	}

	assignNotification(plant) {
		return this.$cordovaLocalNotification.schedule({
			id: plant.id,
			title: plant.name,
			text: 'Need a water!',
			at: this.calculateNotificationTime(plant.interval)
		});
	}

	getPlantById(plantId) {
		let allPlants = this.localStorageService.get('plants');
		return allPlants.find(plant => plant.id === plantId);
	}

	calculateNotificationTime(interval) {
		return new Date(new Date().getTime() + interval * TIME_CONSTANTS.MILISECONDS_IN_SECOND).getTime();
	}

}