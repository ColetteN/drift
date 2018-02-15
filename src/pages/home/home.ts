import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { AudioImagesProvider } from '../../providers/audio-images/audio-images';
import { AudioImagesDetailsPage } from '../../pages/audio-images-details/audio-images-details'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //create array for the images
  public allAudioImages = [];

  constructor(private audioImagesProvider:AudioImagesProvider, 
    private http:Http, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.audioImagesProvider.getAudioImages()
      .subscribe((response) => {
        this.allAudioImages = response;
      });
  }

  goToAudioImagesDetailsPage(audioImages){
    this.navCtrl.push(AudioImagesDetailsPage,{
      audioImagesDetails: audioImages
    });
  }

}
