import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(public auth: AuthService, 
    private router: Router,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  email: string;
  password: string;


  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  
  public login(){
    this.auth.signInWithEmail({email: this.email, password: this.password}).then(user => {
        if(user){
          this.router.navigate(['/home']);
        }
    }).catch(error => {
      this.presentToast(error.message).then(value => {})
    })

  }

}
