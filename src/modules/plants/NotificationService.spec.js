import NotificationService from './NotificationService';
import TIME_CONSTANTS from './TIME_CONSTANTS';

describe('app::plants NotificationService', () => {
	let sut,
		$cordovaLocalNotification;

	let	plant,
		plants;

	beforeEach(() => {
		$cordovaLocalNotification = {
			schedule: jasmine.createSpy('schedule'),
			clear: jasmine.createSpy('clear')
		};

		sut = new NotificationService($cordovaLocalNotification);
	});

	describe('assign notification', () => {
		let notificationTime,
			result;

		beforeEach(() => {
			notificationTime = Math.random();
			plant = {
				id: Math.random(),
				name: RandomString(),
				interval: Math.random()
			};
			spyOn(sut, '_calculateNotificationTime').and.returnValue(notificationTime);
			result = sut.assignNotification(plant);
		});

		it('should calculate notification time', () => {
			expect(sut._calculateNotificationTime).toHaveBeenCalledWith(plant.interval);
		});

		it('should assign timeout for notification', () => {
			expect($cordovaLocalNotification.schedule)
				.toHaveBeenCalledWith(jasmine.objectContaining({
					id: plant.id,
					title: plant.name,
					text: 'Need a water!',
					firstAt: notificationTime,
					every: 'minute'
				}));
		});

		it('should return plant with assigned next notification time', () => {
			expect(result).toEqual(jasmine.objectContaining({
				nextNotification: notificationTime
			}));
		});
	});

	describe('calculate notification time', () => {
		it('should return timestamp in the future to water plant at', () => {
			expect(sut._calculateNotificationTime(Math.random())).toBeGreaterThan(new Date().getTime());
		});
	});

	describe('update notification', () => {
		
	});

	describe('unassign notification', () => {
		beforeEach(() => {
			plant = {
				id: Math.random
			};
			sut.unassignNotification(plant);
		});

		it('should clear notification for plant', () => {
			expect($cordovaLocalNotification.clear).toHaveBeenCalledWith(plant.id)
		});
	});

});