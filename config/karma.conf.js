basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,

  // cdn files
  'vendor/assets/javascripts/jquery-*.min.js',
  'vendor/assets/javascripts/angular/angular.min.js',

  // app
  'app/assets/javascripts/angular/**/*.js',

  // tests
  'spec/javascripts/lib/angular/angular-mocks.js',
  'spec/javascripts/unit/**/*.js'

];

autoWatch = false;
singleRun = true;
browsers  = ['Chrome'];
reporters = ['dots', 'junit'];

preprocessors = {
  '**/*.coffee': 'coffee'
};

