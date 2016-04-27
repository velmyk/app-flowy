import TIME_CONSTANTS from './TIME_CONSTANTS';

export default class PlantsService {
	constructor(PlantsResource,
				NotificationService) {
		'ngInject';

		this.PlantsResource = PlantsResource;
		this.NotificationService = NotificationService;
	}

	createPlant(newPlant) {
		newPlant = this.assignId(newPlant);
		this.NotificationService.assignNotification(newPlant);
		this.PlantsResource.savePlant(newPlant);
	}

	assignId(plant) {
		plant.id = new Date().getTime();
		return plant;
	}

	deletePlant(plant) {
		this.PlantsResource.deletePlant(plant);
	}

}