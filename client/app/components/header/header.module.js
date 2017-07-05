import angular from 'angular';

import HeaderComponent from './header.component';

const HeaderModule = angular.module('header', [])
  .component('header', HeaderComponent);

export default HeaderModule;