const RESTANGULAR = new WeakMap();

export default class RestService {
  constructor (Restangular) {
    'ngInject';

    RESTANGULAR.set(this, Restangular);

    this._isHeaderSet = false;
  }

  get service() {
    return RESTANGULAR.get(this);
  }

  set auth(jwt) {
    if (!this._isHeaderSet) {
      this.service.setDefaultHeaders({'Authorization': 'Bearer '+ jwt})
      this._isHeaderSet = true;
    }
  }
}
