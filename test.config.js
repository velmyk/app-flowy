import 'core-js/es5';
import 'core-js/es6';
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

window.RandomString = RandomString;

function RandomString() {
    return '' + Math.random();
}