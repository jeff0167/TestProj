import { Component, EventEmitter, Output } from '@angular/core';
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

  constructor(private globalData: GlobalData) {
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
