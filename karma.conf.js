module.exports = function (config) {
    config.set({


        basePath: '',


        frameworks: ['jasmine'],


        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'lib/*.js',
            'tests/*.js'
        ],


        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },


        exclude: [],


        preprocessors: {

            'lib/*.js': ['coverage']
        },


        reporters: ['progress', 'coverage'],


        port: 9876,


        colors: true,


        logLevel: config.LOG_INFO,


        autoWatch: true,


        browsers: ['Chrome'],


        singleRun: false
    });
};