var SitePersoApp = angular.module('SitePersoApp', ['ngSanitize']);
SitePersoApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

