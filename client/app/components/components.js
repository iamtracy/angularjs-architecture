import angular from 'angular';
import ListModule from './list/list.module';
import NetflixModule from './netflix/netflix.module';

const ComponentsModule = angular.module('app.components', [
  ListModule.name,
  NetflixModule.name
]);

export default ComponentsModule;