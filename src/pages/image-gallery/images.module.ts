import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageGalleryPage } from './images';

@NgModule({
  declarations: [
    ImageGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageGalleryPage),
  ],
  entryComponents: [
    ImageGalleryPage
  ]
})
export class ImageGalleryPageModule {}
