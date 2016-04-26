import PlantsModifyController from './PlantsModifyController';

describe('app::plants PlantsModifyController', () => {
	let sut,
		$state;

	let plant;

	beforeEach(() => {
		plant = {};

		$state = {
			// go: jasmine.createSpy('go')
			params: {
				plant: plant
			}
		};


		sut = new PlantsModifyController($state);
	});

	it('should resolve plant information', () => {
		expect(sut.plant).toEqual(plant);
	});

// 	describe('modify plant', () => {
// 		beforeEach(() => {
// 			plant = {};
// 			sut.modifyPlant(plant);
// 		});

// 		it('should create plant', () => {
// 			expect($state.go).toHaveBeenCalledWith('^.modify', { plant: plant } );
// 		});
// 	});
});