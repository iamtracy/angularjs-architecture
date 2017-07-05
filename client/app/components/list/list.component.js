import template from './list.component.html';
import controller from './list.controller.js';
import './list.component.scss';

let ListModule = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'ListController'
};

export default ListModule;