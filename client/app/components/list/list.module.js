import angular from 'angular';

import ListComponent from './list.component';

import FirebaseService from '../../services/firebase/firebase';

const ListModule = angular
  .module('list', [])
  .component('list', ListComponent)
  .service("FirebaseService", FirebaseService);

export default ListModule;