import 'core-js/es5';
import 'angular';
import 'angular-mocks/angular-mocks';

loadSpecs();

function loadSpecs() {
    const contextBO = require.context('./src', true, /\.spec\.js$/);
    contextBO.keys().forEach(contextBO);
}

/*
* Region: Helper methods
*/

if (!Array.prototype.find) {
    Array.prototype.find = function(check) {
        var findFn = check;

        if (typeof findFn !== 'function') {
            findFn = function(item) {
                return item === check;
            };
        }

        return this.filter(findFn)[0];
    };
}

window.RandomString = RandomString;

function RandomString() {
    return '' + Math.random();
}