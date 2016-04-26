import PlantsService from './PlantsService';

describe('app::plants PlantsService', () => {
	let sut,
		localStorageService;

	let	plant,
		plants;

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
			spyOn(sut, 'assignId');
			sut.createPlant(plant);
		});

		it('should assign id to newly created plant', () => {
			expect(sut.assignId).toHaveBeenCalledWith(plant);
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

});