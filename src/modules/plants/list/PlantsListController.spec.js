import PlantsListController from './PlantsListController';

describe('app::plants PlantsListController', () => {
	let sut,
		$state,
		PlantsService,
		$event;

	let plantId,
		plant;

	beforeEach(() => {

		$state = {
			go: jasmine.createSpy('go')
		};

		$event = {
			stopPropagation: jasmine.createSpy('stopPropagation')
		};

		PlantsService = {
			deletePlant: jasmine.createSpy('deletePlant')
		};

		sut = new PlantsListController($state,
									   PlantsService);
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

	describe('delete plant', () => {
		beforeEach(() => {
			plant = RandomString();
			sut.deletePlant(plant, $event);
		});

		it('should remove plant', () => {
			expect(PlantsService.deletePlant).toHaveBeenCalledWith(plant);
		});

		it('should prevent opening plant', () => {
			expect($event.stopPropagation).toHaveBeenCalled();
		});
	});
});