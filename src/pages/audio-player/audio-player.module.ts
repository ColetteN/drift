import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AudioPlayerPage } from './audio-player';

@NgModule({
  declarations: [
    AudioPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(AudioPlayerPage),
  ],
})
export class AudioPlayerPageModule {}
