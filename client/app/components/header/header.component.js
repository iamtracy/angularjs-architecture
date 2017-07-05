import template from './header.component.html';
import controller from './header.controller.js';
import './header.component.scss';

let HeaderComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'HeaderController'
};

export default HeaderComponent;