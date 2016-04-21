var webpackCfg = require('./webpack.config');

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['jasmine'],
        files: [
            'test.config.js'
        ],
        preprocessors: {
            'test.config.js': ['webpack']
        },
        reporters: ['dots', 'coverage'],
        coverageReporter: {
            reporters: [
                {type: 'lcov', dir: 'coverage/', subdir: '.'},
                {type: 'json', dir: 'coverage/', subdir: '.'},
                {type: 'text'}
            ]
        },
        webpack: webpackCfg,
        webpackServer: {
            noInfo: true
        }
    });
};