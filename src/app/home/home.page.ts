import { AuthService } from './../auth.service';
import { ContactServiceService } from './../contact-service.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public auth: AuthService, 
    public router: Router){

  }
  ngOnInit() {
    this.auth.afAuth.authState.subscribe(user => {
      if(user){

      }else{
        this.router.navigate(['/login']);
      }
    })
    
  }
  
}
