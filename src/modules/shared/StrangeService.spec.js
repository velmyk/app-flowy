import StrangeService from './StrangeService';

describe('app::shared StrangeService', () => {
	let sut,
		$window;

	let result;

	beforeEach(() => {
		$window = {
			navigator: {
				notification: {
					senseOfLife: jasmine.createSpy('senseOfLife'),
				}
			}
		};

		sut = new StrangeService($window);
	});

	describe('get sense of life', () => {
		let senseOfLife;

		beforeEach(() => {
			senseOfLife = RandomString();
			$window.navigator.notification.senseOfLife.and.returnValue(senseOfLife);
			result = sut.getSenseOfLife();
		});

		it('should call navigator for sense of life', () => {
			expect($window.navigator.notification.senseOfLife).toHaveBeenCalled();
		});

		it('should return sense of life', () => {
			expect(result).toEqual(senseOfLife);
		});

	});
});