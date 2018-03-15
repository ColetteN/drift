import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicProvider } from "../../providers/music/music";
import { SocialSharing } from "@ionic-native/social-sharing";
import { AudioPlayerPage } from "../audio-player/audio-player";

@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html'
})
export class AudioPage {
  public allMusic = [];

  constructor(
    private socialSharing: SocialSharing,
    public navCtrl: NavController, 
    private loadingController: LoadingController,
    private actionSheetController: ActionSheetController,
    private musicProvider: MusicProvider) {
    
  }

  ionViewDidLoad(){
    let allMusicLoadingController = this.loadingController.create({
      content: "Fetching Your Music"
    });
    allMusicLoadingController.present();
    this.musicProvider.getMusic()
      .subscribe((musicList) => {
        allMusicLoadingController.dismiss();
        this.allMusic = musicList
    });
  }

  goToAudioPlayer(music){
    this.navCtrl.push(AudioPlayerPage, {
      music: music
    });
  }  

  shareSong(music){
    let shareSongActionSheet = this.actionSheetController.create({
      title: "Share with friends",
      buttons: [
        {
          text: "Share on Facebook",
          icon: "logo-facebook",
          handler: ()=>{
            this.socialSharing.shareViaFacebook(music.name, music.image, music.music_url);
          }
        },
        {
          text: "Share on Twitter",
          icon: "logo-twitter",
          handler: ()=>{
            this.socialSharing.shareViaTwitter(music.name, music.image, music.music_url);
          }
        },
        {
          text: "Share",
          icon: "logo-share",
          handler: ()=>{
            this.socialSharing.share(music.name, "", music.image, music.music_url);
          }
        },
        {
          text: "Cancel",
          role: "destructive"
        }
      ]
    });
    shareSongActionSheet.present();
  }
}