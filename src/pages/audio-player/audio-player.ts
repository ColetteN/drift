import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaPlugin, MediaObject } from "@ionic-native/media";

/**
 * Generated class for the AudioPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-audio-player',
  templateUrl: 'audio-player.html',
})
export class AudioPlayerPage {
  public music = {};
  private songMedia: MediaObject = null;
  private isMusicPaused = false;

  constructor(private mediaPlugin: MediaPlugin, public navCtrl: NavController, public navParams: NavParams) {
    this.music = this.navParams.get("music");
    console.log(this.navParams.get("music"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioPlayerPage');
  }

  // ionViewWillLeave(){
  //   this.stopMusic();
  // }

  playMusic(){
    if(this.songMedia === null){
      this.songMedia = this.mediaPlugin.create(this.music["music_url"]);
      this.songMedia.play();
    }
    else{
      if(this.isMusicPaused === true){
        this.songMedia.play();
        this.isMusicPaused = false;
      }
    } 
  }

  pauseMusic(){
    if(this.songMedia !==null){
      this.songMedia.pause();
      this.isMusicPaused = true;
    }
  }

  stopMusic(){
    if(this.songMedia !==null){
      this.songMedia.stop();
      this.songMedia.release();
      this.songMedia = null
    }   
  }
}
