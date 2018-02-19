import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreJournalsPage } from './store-journals';

@NgModule({
  declarations: [
    StoreJournalsPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreJournalsPage),
  ],
  entryComponents: [
    StoreJournalsPage,
  ],
})
export class StoreJournalsPageModule {}
