import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageGalleryProvider } from '../../providers/image-gallery/images';
import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //create array for the images
  public allImages = [];
  // imageViewerCtrl: ImageViewerController;

  constructor( public imageViewerCtrl: ImageViewerController, private imageGalleryProvider:ImageGalleryProvider, 
    public navCtrl: NavController) {

      this.imageViewerCtrl = imageViewerCtrl;
  }

  ionViewDidLoad(){
    this.imageGalleryProvider.getImages()
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

}
