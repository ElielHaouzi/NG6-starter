import angular from 'angular';
import uiRouter from 'angular-ui-router';
import TestComponent from './test.component';

let TestModule = angular.module('test', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('test', {
      url: '/test',
      component: 'test'
    });
})
.component('test', TestComponent)

.name;

export default TestModule;
