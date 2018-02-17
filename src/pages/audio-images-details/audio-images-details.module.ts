import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AudioImagesDetailsPage } from './audio-images-details';

@NgModule({
  declarations: [
    AudioImagesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AudioImagesDetailsPage),
  ],
  entryComponents: [
    AudioImagesDetailsPage
  ]
})
export class AudioImagesDetailsPageModule {}
