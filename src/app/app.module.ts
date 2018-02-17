import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AudioPage } from '../pages/audio/audio';
import { JournalPage } from '../pages/journal/journal';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AudioRecordPage } from '../pages/audio-record/audio-record';
import { AudioImagesDetailsPage } from '../pages/audio-images-details/audio-images-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AudioImagesProvider } from '../providers/audio-images/audio-images';

@NgModule({
  declarations: [
    MyApp,
    AudioPage,
    JournalPage,
    HomePage,
    AudioRecordPage,
    AudioImagesDetailsPage,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AudioPage,
    JournalPage,
    AudioImagesDetailsPage,
    HomePage,
    AudioRecordPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AudioImagesProvider
  ]
})
export class AppModule {}
