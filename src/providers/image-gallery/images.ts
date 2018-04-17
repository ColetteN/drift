import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageGalleryProvider {

  constructor(public http: Http) {
    console.log('Hello ImageGalleryProvider Provider');
  }
  
  getImages(){
    return this.http.get('./assets/data.json')
       .map(response => response.json());

  }

}
