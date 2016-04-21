import MainController from './mainController.js';

describe('main controller', () => {
	let sut;

	beforeEach(() => {
		sut = new MainController();
	});

	it('asd', () => {
		expect(sut.mult(2, 3)).toEqual(6);
	});
});