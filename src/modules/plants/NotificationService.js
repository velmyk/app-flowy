import TIME_CONSTANTS from './TIME_CONSTANTS';

export default class PlantsService {
	constructor($cordovaLocalNotification) {
		'ngInject';

		this.$cordovaLocalNotification = $cordovaLocalNotification;
	}

	assignNotification(plant) {
		const notificationTime = this._calculateNotificationTime(plant.interval);

		plant.nextNotification = notificationTime;
		this.$cordovaLocalNotification.schedule({
			id: plant.id,
			title: plant.name,
			text: 'Need a water!',
			firstAt: notificationTime,
			every: 'minute'
		});

		return plant;
	}

	_calculateNotificationTime(interval) {
		return new Date(new Date().getTime() + interval * TIME_CONSTANTS.MILISECONDS_IN_SECOND).getTime();
	}

	update(plant) {
		const notificationTime = this._calculateNotificationTime(plant.interval);

		plant.nextNotification = notificationTime;
		return plant;
	}

	unassignNotification(plant) {
		this.$cordovaLocalNotification.cancel(plant.id);
	}

}