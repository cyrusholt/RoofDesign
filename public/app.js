var app = angular.module('roofApp', ['ngRoute', "ui.grid"])
  
.config(function($routeProvider){
  $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: ''
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: ''
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: ''
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: ''
      })
      .when('/our', {
        templateUrl: 'views/our.html',
        controller: ''
      })
      .when('/estimate', {
        templateUrl: 'views/estimate.html',
        controller: ''
      })
      .when('/invoice', {
        templateUrl: 'views/invoices.html',
        controller: 'invoice-Ctrl'
      })
      .when('/invoice/new', {
        templateUrl: 'views/newInvoice.html',
        controller: 'invoice-Ctrl'
      })
      .when('/faq/increase', {
        templateUrl: 'views/faq/increase.html',
        controller: ''
      })
      .when('/faq/building', {
        templateUrl: 'views/faq/building.html',
        controller: ''
      })
      .when('/faq/falling', {
        templateUrl: 'views/faq/falling.html',
        controller: ''
      })
      .when('/faq/general', {
        templateUrl: 'views/faq/general.html',
        controller: ''
      })
      .when('/faq/hail', {
        templateUrl: 'views/faq/hail.html',
        controller: ''
      })
      .when('/faq/leaks', {
        templateUrl: 'views/faq/leaks.html',
        controller: ''
      })
      .when('/faq/wind', {
        templateUrl: 'views/faq/wind.html',
        controller: ''
      })
      .otherwise({
        redirectTo: '/home'
      });
  });