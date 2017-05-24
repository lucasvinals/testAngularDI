import angular from 'angular';
import { inject, config } from 'ng-annotations';

@config()
@inject('$stateProvider', '$locationProvider')
export default class Routes {
  constructor(stateProvider, locationProvider) {
    this.stateProvider = stateProvider;
    this.locationProvider = locationProvider;
    this.SetStates();
    this.SetHTML5();
  }
  SetStates() {
    this.stateProvider
      .state('/', {
        // abstract: true,
        url: '/',
        templateUrl: 'index.html',
        controller: 'Controller',
      });
  }
  SetHTML5() {
    return this.locationProvider.html5Mode({ enabled: true, requireBase: false });
  }
}