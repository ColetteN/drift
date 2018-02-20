import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html'
})
export class AudioPage {

  constructor(public navCtrl: NavController, private nativeAudio:NativeAudio) {

  }

}
