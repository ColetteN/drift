import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AudioPage } from '../pages/audio/audio';
import { JournalPage } from '../pages/journal/journal';
import { StoreJournalsPage } from '../pages/store-journals/store-journals';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AudioRecordPage } from '../pages/audio-record/audio-record';
import { ImageGalleryPage } from '../pages/image-gallery/images';
import { WelcomePage } from '../pages/welcome/welcome';
import { AudioPlayerPage } from '../pages/audio-player/audio-player';
import { OnboardingPage } from '../pages/onboarding/onboarding';

import { StatusBar } from '@ionic-native/status-bar';
import { NativeAudio } from '@ionic-native/native-audio';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from "@ionic-native/social-sharing";
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage';

import { MediaPlugin } from "@ionic-native/media";
import { File } from '@ionic-native/file';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ImageGalleryProvider } from '../providers/image-gallery/images';
import { JournalProvider } from '../providers/journal/journal';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { MusicProvider } from '../providers/music/music';

@NgModule({
  declarations: [
    MyApp,
    AudioPage,
    JournalPage,
    StoreJournalsPage,
    HomePage,
    WelcomePage,
    AudioRecordPage,
    ImageGalleryPage,
    AudioPlayerPage,
    TabsPage,
    OnboardingPage
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AudioPage,
    JournalPage,
    WelcomePage,
    StoreJournalsPage,
    ImageGalleryPage,
    HomePage,
    AudioRecordPage,
    AudioPlayerPage,
    TabsPage,
    OnboardingPage
  ],
  providers: [
    SocialSharing,
    StatusBar,
    NativeAudio,
    SplashScreen,
    HttpClientModule,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImageGalleryProvider,
    JournalProvider,
    MusicProvider,
    MediaPlugin,
    File
  ]
})
export class AppModule {}
