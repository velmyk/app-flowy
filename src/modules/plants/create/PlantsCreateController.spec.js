import PlantsCreateController from './PlantsCreateController';

describe('app::plants PlantsCreateController', () => {
	let sut,
		PlantsService;

	beforeEach(() => {
		PlantsService = {
			createPlant: jasmine.createSpy('createPlant')
		};

		sut = new PlantsCreateController(PlantsService);
	});

	describe('create plant', () => {
		beforeEach(() => {
			sut.createPlant();
		});

		it('should create plant', () => {
			expect(PlantsService.createPlant).toHaveBeenCalled();
		});
	});
});