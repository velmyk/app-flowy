import PlantsCreateController from './PlantsCreateController';

describe('app::plants PlantsCreateController', () => {
	let sut,
		PlantsService,
		$state;

	beforeEach(() => {
		PlantsService = {
			createPlant: jasmine.createSpy('createPlant')
		};

		$state = {
			go: jasmine.createSpy('go')
		};

		sut = new PlantsCreateController(PlantsService,
										$state);
	});

	describe('create plant', () => {
		beforeEach(() => {
			sut.input = {};
			sut.createPlant();
		});

		it('should create plant', () => {
			expect(PlantsService.createPlant).toHaveBeenCalledWith(sut.input);
		});

		it('should go to plants list after creating new plant', () => {
			expect($state.go).toHaveBeenCalledWith('^.list');
		});
	});
});