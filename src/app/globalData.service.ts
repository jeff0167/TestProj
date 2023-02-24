import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GlobalData {

  public regions: any;
  public tourtypes: any;
  public tours: any;

  public comments: {comment: string, rating: number}[];

  constructor() {
    this.comments = [];
   }

   AddComment(final: {comment: string, rating: number}){
    const copy = Object.assign({}, final); // crazy, an object reference exception here, pretty cool
    this.comments.push(copy);
   }

   RemoveComment(index: number){
    this.comments.splice(index,1);
   }

   initialize(){
    this.comments = [];
   }

//   initialize() {
//     this.getRegions()
//       .then(data => this.regions = data);
//   }

//   getRegions() {
//     let requestUrl = `${this.baseUrl}/Regions.json`;
//     return lastValueFrom(this.http.get(requestUrl));
//   }

}
