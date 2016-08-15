import { Component } from '@angular/core';
import { ionicBootstrap, Storage } from '../../../../../src';


@Component({
  templateUrl: 'main.html',
  providers: [Storage]
})
class E2EApp {
  constructor(public storage: Storage) {
  }

  getItem() {
    this.storage.get('name').then(value => {
      alert('Your name is: ' + value);
    });
  }

  setItem() {
    let name = prompt('Your name?');

    this.storage.set('name', name);
  }

  removeItem() {
    this.storage.remove('name');
  }
}

ionicBootstrap(E2EApp);
