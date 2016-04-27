import PlantsListController from './PlantsListController';

describe('app::plants PlantsListController', () => {
	let sut,
		$state;

	let plantId,
		plant;

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

	describe('add new plant', () => {
		beforeEach(() => {
			sut.addNewPlant();
		});

		it('should go to add plant page', () => {
			expect($state.go).toHaveBeenCalledWith('^.create');
		});
	});

	describe('on swipe left', () => {
		beforeEach(() => {
			sut.forDelete = null;
			plant = RandomString();
			sut.onSwipeLeft(plant);
		});

		it('should show delete button on target item', () => {
			expect(sut.forDelete).toEqual(plant);
		});
	});

	describe('on swipe right', () => {
		beforeEach(() => {
			sut.forDelete = RandomString();
			sut.onSwipeRight();
		});

		it('should show delete button on target item', () => {
			expect(sut.forDelete).toEqual(null);
		});
	});
});