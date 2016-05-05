export default class StrangeController {
	constructor(StrangeService) {
		'ngInject';

		this.StrangeService = StrangeService;
		this.senseOfLife = "";
	}

	showSenseOfLife() {
		this.StrangeService.getSenseOfLife()
			.then(result => this.senseOfLife = result);
	}
	
}