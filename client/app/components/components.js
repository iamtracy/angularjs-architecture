import angular from 'angular';

import ListModule from './list/list.module';
import NetflixModule from './netflix/netflix.module';
import HeaderModule from './header/header.module';

const ComponentsModule = angular.module('app.components', [
  ListModule.name,
  NetflixModule.name,
  HeaderModule.name
]);

export default ComponentsModule;