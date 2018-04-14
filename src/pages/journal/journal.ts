import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray,ToastController } from 'ionic-angular';
import { JournalProvider } from '../../providers/journal/journal';
import { StoreJournalsPage } from "../store-journals/store-journals";

@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html'
})
export class JournalPage {
  public journals = [];
  public reorderIsEnabled = false;
  public archivedJournalsPage = StoreJournalsPage;

  constructor(private toastController: ToastController, private journalProvider: JournalProvider, 
    public navCtrl: NavController, private alertController:AlertController) {
    this.journals = this.journalProvider.getJournals();
  }

  archiveJournal(journalIndex){
    this.journalProvider.archiveJournal(journalIndex);
  }

  goToStoreJournalsPage(){
    this.navCtrl.push(StoreJournalsPage);
  }
  
  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event){
    reorderArray(this.journals, $event);
  }

  openJournalAlert(){
    let addJournalAlert = this.alertController.create({
      title: "Add A Journal",
      message: "Enter Your Journal",
      inputs: [
        {
          type:"text",
          name: "addJournalInput"
        }
      ],
      buttons:[
        {
          text:"Cancel"
        },
        {
          text:"Add",
          handler:(inputData)=> {
            let journalText;
            journalText = inputData.addJournalInput; 
            this.journalProvider.addJournal(journalText);

            addJournalAlert.onDidDismiss(()=> {
                // toast message when todo is added
                let addJournalToast = this.toastController.create({
                  message: "Journal Entry Added",
                  duration: 2000
                });
                // show to user on screen
                addJournalToast.present();
            });

          }
        }
      ]
    });
    addJournalAlert.present();

  }

  editJournal(journalIndex){
    let editJournalAlert = this.alertController.create({
      title: "Edit Journal Entry",
      message: "Edit Your Entry",
      inputs: [
        {
          type: "text",
          name: "editJournalInput",
          value: this.journals[journalIndex]
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Done",
          handler: (inputData)=> {
            let journalText;
            journalText = inputData.editJournalInput;
            this.journalProvider.editJournal(journalText, journalIndex);

            editJournalAlert.onDidDismiss(()=> {
              let editJournalToast = this.toastController.create({
                message: "Journal Edited",
                duration: 2000
              });
              editJournalToast.present();
            });

          }
        }
      ]
    });
    editJournalAlert.present();
  }

}
