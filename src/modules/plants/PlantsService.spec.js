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

	describe('createPlant', () => {
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

});