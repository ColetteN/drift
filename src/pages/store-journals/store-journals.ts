import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JournalProvider } from '../../providers/journal/journal';

/**
 * Generated class for the StoreJournalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-journals',
  templateUrl: 'store-journals.html',
})
export class StoreJournalsPage {
  public archivedJournals = [];
  public journal = [];

  constructor(private journalProvider:JournalProvider, public navCtrl: NavController, public navParams: NavParams) {

  }
  
  // ionViewWillEnter(){
  //   this.getJournalEntries();
  // }
  
  // getJournalEntries(){
  //   if(localStorage.getItem("archivedJournals")){
  //     this.journal = JSON.parse(localStorage.getItem("archivedJournals"));
  //     console.log(this.journal);
  //   }
  // }

  ionViewDidLoad() {
    this.archivedJournals = this.journalProvider.getArchivedJournals();
  }

  delJournal(journalIndex){
    this.journalProvider.removeJournal(journalIndex);
  }

  // saveJournal(journalIndex){
  //   this.journalProvider.saveJournal(journalIndex);
  //   this.archivedJournals.push(data);
  //   localStorage.setItem("archivedJournals", JSON.stringify(this.archivedJournals));
  //   this.getJournalEntries();
  // }
}


