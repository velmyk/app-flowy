import plantsModifyState from './plantsModifyState';

describe('app::plants plantsModifyState', () => {
	let sut,
		PlantsService,
		$stateParams;

	beforeEach(() => {
		PlantsService = {
			getPlantById: jasmine.createSpy('getPlantById')
		};

		$stateParams = {
			plantId: Math.random()
		};

		sut = plantsModifyState;
	});

	it('should resolve plant', () => {
		sut.resolve.plant(PlantsService, $stateParams);
		expect(PlantsService.getPlantById).toHaveBeenCalledWith($stateParams.plantId);
	});
});