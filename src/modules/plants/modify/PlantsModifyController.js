export default class PlantsModifyController {
	constructor($state,
				$cordovaLocalNotification) {
		'ngInject';

		this.$cordovaLocalNotification = $cordovaLocalNotification;
		this.plant = $state.params.plant;
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