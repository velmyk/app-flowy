import NotificationService from './NotificationService';
import TIME_CONSTANTS from './TIME_CONSTANTS';

describe('app::plants NotificationService', () => {
	let sut,
		$cordovaLocalNotification;

	let	plant,
		plants;

	beforeEach(() => {
		$cordovaLocalNotification = {
			schedule: jasmine.createSpy('schedule')
		};

		sut = new NotificationService($cordovaLocalNotification);
	});

	describe('assign notification', () => {
		beforeEach(() => {
			plant = {
				id: Math.random(),
				name: RandomString(),
				interval: Math.random()
			};
			spyOn(sut, '_calculateNotificationTime').and.returnValue(Math.random());
			sut.assignNotification(plant);
		});

		it('should assign timeout for notification', () => {
			expect($cordovaLocalNotification.schedule)
				.toHaveBeenCalledWith(jasmine.objectContaining({
					id: plant.id,
					title: plant.name,
					text: 'Need a water!',
					at: jasmine.any(Number)
				}));
		});
	});

	describe('calculate notification time', () => {
		it('should return timestamp in the future to water plant at', () => {
			expect(sut._calculateNotificationTime(Math.random())).toBeGreaterThan(new Date().getTime());
		});
	});

});