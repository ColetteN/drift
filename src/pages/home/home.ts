import { Component } from '@angular/core';
// import { Http } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { AudioImagesProvider } from '../../providers/audio-images/audio-images';
// import { AudioImagesDetailsPage } from '../../pages/audio-images-details/audio-images-details';
import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //create array for the images
  public allImages = [];
  // imageViewerCtrl: ImageViewerController;

  constructor( public imageViewerCtrl: ImageViewerController, private audioImagesProvider:AudioImagesProvider, 
    public navCtrl: NavController) {

      this.imageViewerCtrl = imageViewerCtrl;
  }

  ionViewDidLoad(){
    this.audioImagesProvider.getImages()
      .subscribe((response) => {
        this.allImages = response;
      });
  }

  presentImage(galleryImages) {
    const imageViewer = this.imageViewerCtrl.create(galleryImages);
    imageViewer.present();
 
    setTimeout(() => imageViewer.dismiss(), 1000);
    imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }

  // goToAudioImagesDetailsPage(audioImages){
  //   this.navCtrl.push(AudioImagesDetailsPage,{
  //     audioImagesDetails: audioImages
  //   });
  // }

}
