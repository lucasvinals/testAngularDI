import { inject, controller } from 'ng-annotations';

@controller('Controller')
@inject('Service')
export default class Controller {
  constructor(Service) {
    this.message = Service.Message();
  }
  ChangeMessage(msg) {
    return this.message = msg;
  }
}
