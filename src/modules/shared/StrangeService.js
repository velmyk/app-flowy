export default class StrangeService {
    constructor($window) {
        'ngInject';

        this.$window = $window;

    }

    getSenseOfLife() {
        return this.$window.navigator.notification.senseOfLife();
    }

};