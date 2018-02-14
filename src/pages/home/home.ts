import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { AudioImagesProvider } from '../../providers/audio-images/audio-images';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private audioImagesProvider:AudioImagesProvider, 
    private http:Http, 
    private httpClientModule:HttpClientModule,
    public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.http.get('./assets/data.json')
      .map(response => response.json())
      .subscribe(response => console.log(response));

  }

}
