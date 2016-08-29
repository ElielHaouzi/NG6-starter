import template from './test.pug';
import controller from './test.controller';
import './test.scss';

let TestComponent = {
  restrict: 'E',
  bindings: {},
  template: template(),
  controller
};

export default TestComponent;
