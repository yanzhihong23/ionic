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
  keys() {
    this.storage.keys().then(keys => {
      console.log('KEYS', keys);
    });
  }
  length() {
    this.storage.length().then(len => {
      console.log('KEYS', len);
    })
  }
  forEach() {
    this.storage.forEach((value, key, index) => {
      console.log('ITER', value, key, index);
    })
  }
}

ionicBootstrap(E2EApp);
