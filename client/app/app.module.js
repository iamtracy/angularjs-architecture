import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import 'angular-material';

import AppComponent from './app.component';
import ComponentsModule from './components/components';

import NetflixComponent from './components/netflix/netflix.component';


angular.module('app', [
    ComponentsModule.name,
    uiRouter,
    'ngMaterial'
  ])
  .component('app', AppComponent)
  .config([
    '$sceDelegateProvider',
    '$stateProvider',
    ($sceDelegateProvider, $stateProvider) => {
      $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://netflixroulette.net/**']);
      console.log($stateProvider);
      $stateProvider
        .state('list', {
          url: "/list",
          template: '<netflix></netflix>'
        })
        .state('netflix', {
          url: '/netflix',
          template: '<list></list>'
        });
    }
  ])