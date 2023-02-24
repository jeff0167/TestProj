import { Component } from '@angular/core';

import { GlobalData } from '../globalData.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  comments: {comment: string, rating: number}[];

  constructor(private globalData: GlobalData) {
    this.comments = globalData.comments;
  }

  async ngOnInit() {
    
  }

  editComment(index: number){
    // when you click the button a text field window shows up where you can change the existing comment, click a button then it changes the comment or X for cancel
  }

  deleteComment(index: number){
    this.globalData.RemoveComment(index);
    this.comments = this.globalData.comments; 
  }

}

// I have three tabs, i want to share data between them
// i write a comment in tab one click create and then that comment lives
// in tab 2 i can see all the comments created and edit or delete them
// in tab 3 you can like comments