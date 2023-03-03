import { Component, EventEmitter, Output } from '@angular/core';
import { Color } from '@ionic/core';
import { GlobalData } from '../globalData.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  comments: {comment: string, rating: number}[];

  public singleComment: {comment: string, rating: number};

  @Output() reviewSubmitted = new EventEmitter<string>();

  //tableColor: Color = "#22fcc9";
  // if the tables is reserved display it as red

  GetTableColor(id: number){ // would need table id
    if(this.globalData.tables[id].isReserved){
      return "#ec7288"
    }
    return "#78bef4";
  }

  tablesChosen: number[] = [];

  ReserveTable(id: number){
    this.tablesChosen.push(id); // would really just want it to change color on click, then click again to unselect it
  }
  
  AddReservation(){
    this.globalData.AddReservationsId(this.tablesChosen)
  }

  constructor(public globalData: GlobalData) {
    this.comments = globalData.comments;
    this.singleComment = {comment: "", rating: 0};
  }

  createComment(){
    this.exportData();
    this.singleComment.comment = "";
    this.comments = this.globalData.comments; // hmm might be a lot of data we are copying
  }

  exportData(){

    this.singleComment.rating = 0;
    this.singleComment.comment = this.singleComment.comment;
    this.globalData.AddComment(this.singleComment);
  }

}
