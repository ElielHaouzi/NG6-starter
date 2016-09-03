
import angular from 'angular';
import lodash from 'lodash';
import restangular from 'restangular';
import RestService from './rest.service';

let restModule = angular.module('rest', [
  'restangular'
])

.service('RestService', RestService)

.name;

export default restModule;
