import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
// import { DataProvider } from '../../providers/data/data';

/*
  Generated class for the JournalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JournalProvider {
  private journals = [];
  private archivedJournals = [];

  constructor(public http: HttpClient) {
    console.log('Hello JournalProvider Provider');
  }

archiveJournal(journalIndex){
    // variable to hold the todo to be archived
let journalToBeArchived = this.journals[journalIndex];
// remove the journal/todo from the todo list
this.journals.splice(journalIndex, 1);
//add the removed todo to the archived todos array
this.archivedJournals.push(journalToBeArchived);
}

deleteJournal(journalIndex){
  // variable to hold the todo to be archived
let journalToBeArchived = this.journals[journalIndex];
// remove the todo from the todo list
this.journals.splice(journalIndex, 1);
//add the removed todo to the archived todos array
this.archivedJournals.splice(journalToBeArchived);
}

getJournals(){
return this.journals;
}

getArchivedJournals(){
// from the array
return this.archivedJournals; 
}

addJournal(journal){
this.journals.push(journal);
}

editJournal(journal,journalIndex){
this.journals[journalIndex] = journal;
}

// saveJournal(journal,journalIndex){
//   this.journals[journalIndex] = journal;
//   }

removeJournal(journal){
  this.archivedJournals.splice(journal,1);
  }

}
