import PlantsListController from './PlantsListController';

describe('app::plants PlantsListController', () => {
	let sut,
		$state;

	let plantId;

	beforeEach(() => {

		$state = {
			go: jasmine.createSpy('go')
		};

		sut = new PlantsListController($state);
	});

	describe('modify plant', () => {
		beforeEach(() => {
			plantId = Math.random();
			sut.modifyPlant(plantId);
		});

		it('should create plant', () => {
			expect($state.go).toHaveBeenCalledWith('^.modify', { plantId: plantId } );
		});
	});
});