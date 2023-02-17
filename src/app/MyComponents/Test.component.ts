import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'test',
  templateUrl: './Test.component.html',
  styleUrls: ['./Test.component.css']
})
export class TestComponent {

  name: string = "hi";
  items: Array<string> = ["sven", "bob"];
  Active: boolean = true;
  async PressedAlert() {
    this.Active = !this.Active;
    this.name = "Evil"
    const val = confirm("are u good brah")
    if(val){
      alert("yes you are good")
    }
    else alert("no you are not good")
  }

  public progress = 0;

  constructor() {
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }

}