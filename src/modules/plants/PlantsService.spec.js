import PlantsService from './PlantsService';

describe('app::plants PlantsService', () => {
	let sut,
		localStorageService;

	let	plant;

	beforeEach(() => {
		localStorageService = {
			set: jasmine.createSpy('set'),
			get: jasmine.createSpy('get')
		};

		sut = new PlantsService(localStorageService);
	});

	describe('create plant', () => {
		beforeEach(() => {
			plant = {};
			sut.createPlant(plant);
		});

		it('should get current list of existing plants', () => {
			expect(localStorageService.get).toHaveBeenCalledWith('plants');
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

});