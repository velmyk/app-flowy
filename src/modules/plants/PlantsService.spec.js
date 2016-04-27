import PlantsService from './PlantsService';
import TIME_CONSTANTS from './TIME_CONSTANTS';

describe('app::plants PlantsService', () => {
	let sut,
		localStorageService,
		$cordovaLocalNotification;

	let	plant,
		plants;

	beforeEach(() => {
		$cordovaLocalNotification = {
			schedule: jasmine.createSpy('schedule')
		};

		localStorageService = {
			set: jasmine.createSpy('set'),
			get: jasmine.createSpy('get')
		};

		sut = new PlantsService(localStorageService,
								$cordovaLocalNotification);
	});

	describe('create plant', () => {
		beforeEach(() => {
			plant = {};
			spyOn(sut, 'assignId');
			spyOn(sut, 'assignNotification');
			sut.createPlant(plant);
		});

		it('should assign id to newly created plant', () => {
			expect(sut.assignId).toHaveBeenCalledWith(plant);
		});

		it('should get current list of existing plants', () => {
			expect(localStorageService.get).toHaveBeenCalledWith('plants');
		});

		it('should assign notification', () => {
			expect(sut.assignNotification).toHaveBeenCalled();
		});

		it('should store plant', () => {
			expect(localStorageService.set).toHaveBeenCalledWith('plants', jasmine.any(Array));
		});
	});

	describe('get all plants', () => {
		let plants;

		beforeEach(() => {
			plants = {};
			localStorageService.get.and.returnValue(plants);
		});

		it('should load all plants', () => {
			expect(sut.getAllPlants()).toEqual(plants);
		});
	});

	describe('assign id', () => {
		beforeEach(() => {
			plant = {};
		});

		it('should assign id to plant', () => {
			expect(sut.assignId(plant)).toEqual(jasmine.objectContaining({
				id: jasmine.any(Number)
			}));
		});
	});

	describe('get plant by id', () => {
		beforeEach(() => {
			plant = {
				id: Math.random()
			};
			plants = [plant]
			localStorageService.get.and.returnValue(plants);
		});

		it('should find plant in local storage', () => {
			expect(sut.getPlantById(plant.id)).toEqual(plant);
		});
	});

	describe('assign notification', () => {
		beforeEach(() => {
			plant = {
				id: Math.random(),
				name: RandomString(),
				interval: Math.random()
			};
			spyOn(sut, 'calculateNotificationTime').and.returnValue(Math.random());
			sut.assignNotification(plant);
		});

		it('should assign timeout for notification', () => {
			expect($cordovaLocalNotification.schedule)
				.toHaveBeenCalledWith(jasmine.objectContaining({
					id: plant.id,
					title: plant.name,
					text: 'Need a water!',
					at: jasmine.any(Number)
				}));
		});
	});

	describe('calculate notification time', () => {
		it('should return timestamp in the future to water plant at', () => {
			expect(sut.calculateNotificationTime(Math.random())).toBeGreaterThan(new Date().getTime());
		});
	});

	describe('delete plant', () => {
		let plantsAfterDeleting;

		beforeEach(() => {
			plant = {
				id: Math.random()
			};
			plants = [{id: 1}, {id: 2}, plant, {id: 3}];
			plantsAfterDeleting = [{id: 1}, {id: 2}, {id: 3}];;
			localStorageService.get.and.returnValue(plants);
			sut.deletePlant(plant);
		});

		it('should get current list of existing plants', () => {
			expect(localStorageService.get).toHaveBeenCalledWith('plants');
		});

		it('should store other plants after deleting', () => {
			expect(localStorageService.set).toHaveBeenCalledWith('plants', plantsAfterDeleting);
		});
	});

});