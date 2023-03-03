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

// alright, need to consider which firebase database to use, cloud firestore or realtime database
// they both can be used offline and across devices and have realtime update sync with connected devices
// the major difference I see is the structure of the databse and then how that data is accessed
// realtime database is more simple and uses json, used for small and frequently used data
// cloud firestore uses documents, which is heavier, but bascily a sql db without hard restrictions for large complex data

// this app is for a resturant
// depending on the idea and the structure of it's implementation you would maybe use both
// I certainly see realtime db, with small simple data be used for most task, like ordering a table
// then maybe cloud firestore for maybe users, if you even would make it so you need users to order a table, which is arguable