import { inject, service } from 'ng-annotations';

@service('Service')
export default class {
  constructor() {
    this.message = 'Hola Lucas!';
  }

  Message() {
    return this.message;
  }
}
