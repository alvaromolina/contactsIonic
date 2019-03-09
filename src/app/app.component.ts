import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Environment } from '@ionic-native/google-maps';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public auth: AuthService, 
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (document.URL.startsWith('http')){
        Environment.setEnv({
          API_KEY_FOR_BROWSER_RELEASE: "AIzaSyBtJqVSZXPPsVLrNYAU7Z22sPzvekc3NUI",
          API_KEY_FOR_BROWSER_DEBUG: "AIzaSyBtJqVSZXPPsVLrNYAU7Z22sPzvekc3NUI"
        });
      }
      this.auth.afAuth.authState.subscribe(user => {
        console.log(user);
        if(!user){
          this.router.navigate(['/login']);
        }
      })

    });
  }
}
