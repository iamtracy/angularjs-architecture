import angular from 'angular';

import NetflixService from '../../services/netflix/netflix';

import NetflixComponent from './netflix.component';

const NetflixModule = angular
  .module('netflix', [])
  .component('netflix', NetflixComponent)
  .service("NetflixService", NetflixService)
  .controller('NetflixCtrl', () => {});

export default NetflixModule;