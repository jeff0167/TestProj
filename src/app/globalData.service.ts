import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

export interface Table{
  id: number,
  seats: number,
  isReserved: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class GlobalData {

  public regions: any;
  public tourtypes: any;
  public tours: any;

  public comments: {comment: string, rating: number}[]; // use an interface

  public tables: Table[] = [
    {id:0, seats: 5, isReserved: false},
    {id:1, seats: 4, isReserved: false},
    {id:2, seats: 4, isReserved: false},
    {id:3, seats: 4, isReserved: false},
    {id:4, seats: 4, isReserved: false}
  ];

  constructor() {
    this.comments = [];
   }
   initialize(){
    this.comments = [];
   }

   AddReservations(_tables: Table[]){  // could also just send the id
    // obviously more data needs to be saved and what not
    // the website should not let you able to select tables that are already reserved, realtime database pog
    _tables.forEach(element => {
      this.tables[element.id].isReserved = true;
    });
   }

   AddReservationsId(_tables: number[]){ 
    _tables.forEach(element => {
      this.tables[element].isReserved = true;
      //alert(element + " is reserved: " + this.tables[element].isReserved);
    });
   }

   AddComment(final: {comment: string, rating: number}){
    const copy = Object.assign({}, final); // crazy, an object reference exception here, pretty cool
    this.comments.push(copy);
   }

   RemoveComment(index: number){
    this.comments.splice(index,1);
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
