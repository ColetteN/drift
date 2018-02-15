import { Http } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the AudioImagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AudioImagesProvider {

  constructor(public http: Http) {
    console.log('Hello AudioImagesProvider Provider');
  }
  
  getAudioImages(){
    return this.http.get('./assets/data.json')
       .map(response => response.json());

  }

}
