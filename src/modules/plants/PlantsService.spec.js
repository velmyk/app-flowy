import PlantsService from './PlantsService';

describe('app::plants PlantsService', () => {
	let sut,
		PlantsResource,
		NotificationService;

	let	plant,
		plants;

	beforeEach(() => {

		PlantsResource = {
			savePlant: jasmine.createSpy('savePlant'),
			deletePlant: jasmine.createSpy('deletePlant')
		};

		NotificationService = {
			assignNotification: jasmine.createSpy('assignNotification')
		};

		sut = new PlantsService(PlantsResource,
								NotificationService);
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

		it('should assign notification', () => {
			expect(NotificationService.assignNotification).toHaveBeenCalled();
		});

		it('should store plant', () => {
			expect(PlantsResource.savePlant).toHaveBeenCalledWith(jasmine.obje);
		});
	});

	describe('delete plant', () => {
		beforeEach(() => {
			plant = {};

			sut.deletePlant(plant);
		});

		it('should remove selected plant', () => {
			expect(PlantsResource.deletePlant).toHaveBeenCalledWith(plant);
		});
	});

});