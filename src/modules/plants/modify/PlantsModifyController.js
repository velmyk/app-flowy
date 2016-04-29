export default class PlantsModifyController {
	constructor($state,
				PlantsService,
				PlantsResource,
				plant) {
		'ngInject';

		this.plant = plant;
		this.PlantsService = PlantsService;
		this.PlantsResource = PlantsResource;
	}

	isPlantNeedWater() {
		return this.plant.nextNotification < new Date();
	}

	waterPlant() {
		this.PlantsService.updateForNewPeriod(this.plant);
	}

	updatePlantInformation() {
		this.PlantsResource.updatePlant(this.plant);
	}
	
}