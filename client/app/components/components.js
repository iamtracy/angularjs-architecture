import angular from 'angular';
import HeaderModule from './header/header.module';
import ListModule from './list/list.module';
import NetflixModule from './netflix/netflix.module';

const ComponentsModule = angular.module('app.components', [
  HeaderModule.name,
  ListModule.name,
  NetflixModule.name
]);

export default ComponentsModule;