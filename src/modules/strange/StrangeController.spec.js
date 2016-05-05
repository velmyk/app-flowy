import StrangeController from './StrangeController';

describe('app::strange StrangeController', () => {
	let sut,
		$q,
		$timeout,
		StrangeService;

	beforeEach(() => {

		inject((_$q_,
        		_$timeout_) => {
            $q = _$q_;
            $timeout = _$timeout_;
        });

		StrangeService = {
			getSenseOfLife: jasmine.createSpy('getSenseOfLife')
		};

		sut = new StrangeController(StrangeService);
	});

	describe('show sense of life', () => {
		let senseOfLife;

		beforeEach(() => {
			senseOfLife = RandomString();
			StrangeService.getSenseOfLife.and.returnValue($q.when(senseOfLife));
			sut.showSenseOfLife();
			$timeout.flush();
		});

		it('should call service for sense of life', () => {
			expect(StrangeService.getSenseOfLife).toHaveBeenCalled();
		});

		it('should return sense of life', () => {
			expect(sut.senseOfLife).toEqual(senseOfLife);
		});

	});
});