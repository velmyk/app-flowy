import PlantsModifyController from './PlantsModifyController';

describe('app::plants PlantsModifyController', () => {
	let sut,
		$state,
		$cordovaLocalNotification;

	let plant;

	beforeEach(() => {
		plant = {};

		$state = {
			go: jasmine.createSpy('go')
		};

		$cordovaLocalNotification = {

		};

		sut = new PlantsModifyController($state,
										$cordovaLocalNotification,
										plant);
	});

	it('should resolve plant information', () => {
		expect(sut.plant).toEqual(plant);
	});

});