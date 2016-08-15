import { Component } from '@angular/core';
import { ionicBootstrap, Storage } from '../../../../../src';


@Component({
  templateUrl: 'main.html',
  providers: [Storage]
})
class E2EApp {
  constructor(public storage: Storage) {
  }

  getLocal() {
    /*
    this.storage.get('name').then(value => {
      alert('Your name is: ' + value);
    });
    */
  }

  setLocal() {
    /*
    let name = prompt('Your name?');

    this.local.set('name', name);
    */
  }

  removeLocal() {
    //this.local.remove('name');
  }

  getSql() {
    /*
    this.sql.get('name').then(value => {
      alert('Your name is: ' + value);
    }, (errResult) => {
      console.error('Unable to get item from SQL db:', errResult);
    });
    */
  }

  setSql() {
    /*
    let name = prompt('Your name?');

    this.sql.set('name', name);
    */
  }

  removeSql() {
    //this.sql.remove('name');
  }
}

ionicBootstrap(E2EApp);
