export default class StrangeController {
	constructor(StrangeService) {
		'ngInject';

		this.StrangeService = StrangeService;
	}

	showSenseOfLife() {
		this.StrangeService.getSenseOfLife()
			.then(result => this.senseOfLife = result);
	}
	
}