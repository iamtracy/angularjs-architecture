import angular from 'angular';

import FirebaseService from '../../services/firebase/firebase';

import ListComponent from './list.component';

const ListModule = angular
  .module('list', [])
  .component('list', ListComponent)
  .service("FirebaseService", FirebaseService);

export default ListModule;