export default class PlantsModifyController {
	constructor($state,
				PlantsService,
				plant) {
		'ngInject';

		this.plant = plant;
		this.PlantsService = PlantsService;
	}

	isPlantNeedWater() {
		return this.plant.nextNotification < new Date();
	}

	waterPlant() {
		this.PlantsService.updateForNewPeriod(this.plant);
	}
	
}