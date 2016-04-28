export default class PlantsModifyController {
	constructor($state,
				$cordovaLocalNotification,
				plant) {
		'ngInject';

		this.plant = plant;
	}

	isPlantNeedWater() {
		return this.plant.nextNotification < new Date();
	}
	
}