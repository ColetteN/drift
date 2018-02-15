import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AudioImagesDetailsPage } from '../pages/audio-images-details/audio-images-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AudioImagesProvider } from '../providers/audio-images/audio-images';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AudioImagesDetailsPage,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    // AudioImagesDetailsPage,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    AudioImagesDetailsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    HttpModule,
    // AudioImagesDetailsPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AudioImagesProvider
  ]
})
export class AppModule {}
