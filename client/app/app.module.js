import angular from 'angular';

import 'angular-material';

import AppComponent from './app.component';
import ComponentsModule from './components/components';


angular.module('app', [
    ComponentsModule.name,
    'ngMaterial'
  ])
  .component('app', AppComponent)
  .config([
    '$sceDelegateProvider',
    ($sceDelegateProvider) => {
      $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://netflixroulette.net/**']);
    }
  ]);