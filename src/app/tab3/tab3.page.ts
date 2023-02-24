import { Component } from '@angular/core';

import { GlobalData } from '../globalData.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  comments: {comment: string, rating: number}[];

  constructor(private globalData: GlobalData) {
    this.comments = globalData.comments;
  }

  async ngOnInit() {
    
  }

  addLike(index: number){
    // need to get the id of the comment or something when iterating over it to then chose the specific chosen comment to add a like to
    this.comments[index].rating ++;
  }

}
