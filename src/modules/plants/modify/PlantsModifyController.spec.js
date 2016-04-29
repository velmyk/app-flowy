import PlantsModifyController from './PlantsModifyController';

describe('app::plants PlantsModifyController', () => {
	let sut,
		$state,
		PlantService,
		PlantsResource;

	let plant;

	beforeEach(() => {
		plant = {};

		$state = {
			go: jasmine.createSpy('go')
		};

		PlantService = {
			updateForNewPeriod: jasmine.createSpy('updateForNewPeriod')
		};

		PlantsResource = {
			updatePlant: jasmine.createSpy('updatePlant')
		};

		sut = new PlantsModifyController($state,
										PlantService,
										PlantsResource,
										plant);
	});

	it('should resolve plant information', () => {
		expect(sut.plant).toEqual(plant);
	});

	describe('is plant need water', () => {
		let now,
			waterTime;

		beforeEach(() => {
			now = new Date().getTime();
		});

		it('should check if plant need water', () => {
			sut.plant.nextNotification = now - 1000;
			expect(sut.isPlantNeedWater(plant)).toEqual(true);
		});

		it('should check if plant doesn\'t need water', () => {
			sut.plant.nextNotification = now + 1000;
			expect(sut.isPlantNeedWater(plant)).toEqual(false);
		});
	});

	describe('water plant', () => {
		beforeEach(() => {
			plant = RandomString();
			sut.plant = plant;
			sut.waterPlant();
		});

		it('should reschedule next watering', () => {
			expect(PlantService.updateForNewPeriod).toHaveBeenCalledWith(plant);
		});
	});

	describe('update plant information', () => {
		beforeEach(() => {
			plant = RandomString();
			sut.plant = plant;
			sut.updatePlantInformation();
		});

		it('should upate plant information in storage', () => {
			expect(PlantsResource.updatePlant).toHaveBeenCalledWith(plant);
		});
	});

});