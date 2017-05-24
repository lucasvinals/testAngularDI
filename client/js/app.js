import angular from 'angular';
import Service from './services';
import Controller from './controllers';
import Routes from './app.routes';
import 'angular-ui-router';

const app = angular.module('Test', [ 'ui.router', 'Test.Some' ]);

const appR = angular.module('Test.Some', []);

export default app.name;

[
  Service,
  Controller,
  Routes,
].forEach((component) => component.autodeclare(appR));


