export default class PlantsModifyController {
	constructor($cordovaDialogs,
				$cordovaVibration,
				$timeout,
				$cordovaLocalNotification) {
		'ngInject';

		this.$cordovaDialogs = $cordovaDialogs;
		this.$cordovaVibration = $cordovaVibration;
		this.$timeout = $timeout;
		this.$cordovaLocalNotification = $cordovaLocalNotification;
	}

	notify() {
		
		const now = new Date().getTime(),
			  _10SecondsFromNow = new Date(now + 30 * 1000);

		return this.$cordovaLocalNotification.schedule({
				id: 10,
				title: 'Title here2222',
				text: 'Text here222',
				at: _10SecondsFromNow
			})
			.then(result => {
				this.$cordovaVibration.vibrate(200);
			});
	}
}