import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AudioRecordPage } from './audio-record';

@NgModule({
  declarations: [
    AudioRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(AudioRecordPage), 
  ],
  entryComponents: [
    AudioRecordPage,
  ],
})
export class AudioRecordPageModule {}
