import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import 'angular-material';

import AppComponent from './app.component';
import ComponentsModule from './components/components';

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

      $sceDelegateProvider
        .resourceUrlWhitelist([
          'self', 'http://netflixroulette.net/**'
        ]);

      $stateProvider
        .state('list', {
          url: "/list",
          template: '<list></list>'
        })
        .state('netflix', {
          url: '/netflix',
          template: '<netflix></netflix>'
        })
        .state("otherwise", {
          url: '*path',
          template: '<netflix></netflix>'
        });

    }
  ]);