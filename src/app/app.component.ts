import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen'
import { GlobalData } from './globalData.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private platform: Platform, private globalData: GlobalData) {

    this.initializeApp(); 
  }

  initializeApp() {

      this.platform.ready().then(() => {
        this.globalData.initialize();
      });
    
    SplashScreen.hide();
  }
}
