import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

// const API: string = "http://www.orangevalleycaa.org/api/music";
@Injectable()
export class MusicProvider {

  constructor(public http: Http) {
    console.log('Hello MusicProvider Provider');
  }
  getMusic(){
    return this.http.get('./assets/music.json')
      .map(response => response.json());
  }

}
