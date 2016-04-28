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
			deletePlant: jasmine.createSpy('deletePlant'),
			updatePlant: jasmine.createSpy('update')
		};

		NotificationService = {
			assignNotification: jasmine.createSpy('assignNotification'),
			unassignNotification: jasmine.createSpy('unassignNotification'),
			update: jasmine.createSpy('update')
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
			expect(PlantsResource.savePlant).toHaveBeenCalled();
		});
	});

	describe('delete plant', () => {
		beforeEach(() => {
			plant = {};

			sut.deletePlant(plant);
		});

		it('should anassign all notifications from plant', () => {
			expect(NotificationService.unassignNotification).toHaveBeenCalledWith(plant);
		});

		it('should remove selected plant', () => {
			expect(PlantsResource.deletePlant).toHaveBeenCalledWith(plant);
		});
	});

	describe('update for new period', () => {
		beforeEach(() => {
			plant = RandomString();
			sut.updateForNewPeriod(plant);
		});

		it('should update notification', () => {
			expect(NotificationService.update)
				.toHaveBeenCalledWith(plant);
		});

		it('should assign new notification time to plant', () => {
			expect(PlantsResource.updatePlant).toHaveBeenCalled();
		});
	});

});