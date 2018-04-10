import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AudioPage } from '../audio/audio';
import { JournalPage } from '../journal/journal';
import { AudioRecordPage } from '../audio-record/audio-record';
// import { WelcomePage } from '../welcome/welcome';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AudioPage;
  tab3Root = JournalPage;
  tab4Root = AudioRecordPage;
  // tab5Root = WelcomePage;

  // constructor() {

  }
}
