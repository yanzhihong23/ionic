import { Injectable } from '@angular/core';

//declare var require: any;
//const localforage: LocalForage = require("localforage");
import * as LocalForage from 'localforage';

import { Config } from '../../config/config';

/**
 * Storage is an easy way to store key/value pairs and other complicated
 * data in a way that uses a variety of storage engines underneath.
 *
 * For most cases, we recommend the SqlStorage system as it will store
 * data in a file in the app's sandbox. LocalStorage should ONLY be used
 * for temporary data as it may be 'cleaned up' by the operation system
 * during low disk space situations.
 */

@Injectable()
export class Storage {
  constructor(public config: Config) {

    console.log('Got config', config);

    console.log(LocalForage);

    this._db = LocalForage.default;
    console.log(this._db);
    this._db.config({
      name        : '_ionicstorage',
      storeName   : '_ionickv'
    });
  }

  get(key: string): Promise<any> {
    return this._db.getItem(key);
  }

  set(key: string, value: any) {
    return this._db.setItem(key, value);
  }

  remove(key: string) {
    return this._db.removeItem(key);
  }

  clear() {
    return this._db.clear();
  }

  /**
   * @return the number of keys stored.
   */
  length() {
    return this._db.length();
  }

  /**
   * @return the keys in the store.
   */
  keys() {
    return this._db.keys();
  }

  forEach(iteratorCallback: (value: any, key: string, iterationNumber: Number) => any) {
    return this._db.iterate(iteratorCallback);
  }

  /*
  getJson(key: string): Promise<any> {
    return this.get(key).then(value => {
      try {
        return JSON.parse(value);
      } catch (e) {
        console.warn('Storage getJson(): unable to parse value for key', key, ' as JSON');
        throw e; // rethrowing exception so it can be handled with .catch()
      }
    });
  }

  setJson(key: string, value: any): Promise<any> {
    try {
      return this.set(key, JSON.stringify(value));
    } catch (e) {
      return Promise.reject(e);
    }
  }


  remove(key: string) {
    return this._strategy.remove(key);
  }

  query(query: string, params?: any) {
    return this._strategy.query(query, params);
  }

  clear() {
    return this._strategy.clear();
  }
  */
}
