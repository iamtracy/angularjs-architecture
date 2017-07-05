import angular from 'angular';

import ListComponent from './list.component';

import ApiService from '../../services/api/api';

const ListModule = angular
  .module('list', [])
  .component('list', ListComponent)
  .service("ApiService", ApiService);

export default ListModule;