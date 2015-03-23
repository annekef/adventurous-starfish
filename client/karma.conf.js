// Karma configuration
// Generated on Fri Mar 13 2015 14:50:27 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      // dependencies
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.2/underscore-min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-animate.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.12/angular-route.min.js',

      // app code & spec files
      'app/*.js',
      'common/*.js',
      'app/ideas/*.js',
      'app/votes/*.js',
      'app/auth/*.js',
      'app/comments/*.js'
    ],


    // list of files to exclude
    exclude: [
        'karma.conf.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
