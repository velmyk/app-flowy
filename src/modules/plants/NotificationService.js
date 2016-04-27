import TIME_CONSTANTS from './TIME_CONSTANTS';

export default class PlantsService {
	constructor($cordovaLocalNotification) {
		'ngInject';

		this.$cordovaLocalNotification = $cordovaLocalNotification;
	}

	assignNotification(plant) {
		return this.$cordovaLocalNotification.schedule({
			id: plant.id,
			title: plant.name,
			text: 'Need a water!',
			at: this._calculateNotificationTime(plant.interval)
		});
	}

	_calculateNotificationTime(interval) {
		return new Date(new Date().getTime() + interval * TIME_CONSTANTS.MILISECONDS_IN_SECOND).getTime();
	}

}