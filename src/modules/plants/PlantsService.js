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
		this.NotificationService.unassignNotification(plant);
		this.PlantsResource.deletePlant(plant);
	}

	updateForNewPeriod(plant) {
		this.NotificationService.update(plant);
		this.PlantsResource.updatePlant(plant);
	}

}