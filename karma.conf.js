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
        webpack: {
            isparta: {
                embedSource: true,
                noAutoWrap: true,
                babel: {
                    presets: ['es2015', 'stage-0']
                }
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel',
                        query: {
                            presets: ['es2015', 'stage-0']
                        }
                    },
                    {
                        test: /\.js$/,
                        loader: 'isparta',
                        exclude: /node_modules|\.spec.js$/
                    }
                ]
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};