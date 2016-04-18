'use strict';

/* App Module */

var rssReaderApp = angular.module('rssReaderApp', [
  'ngRoute',
  //'rssReaderAnimations',
  'rssReaderControllers',
  'rssReaderFilters',
  'rssReaderServices'
]);

rssReaderApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Go', {
        templateUrl: 'partials/go.html',
        controller: 'GoCtrl'
      }).
      otherwise({
        redirectTo: '/Go'
      });
  }]);
