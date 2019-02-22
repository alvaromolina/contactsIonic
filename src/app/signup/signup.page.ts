import { ToastController } from '@ionic/angular';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string;
  password: string;
  password_repeat: string;

  constructor(private auth: AuthService, private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  register(){
    this.auth.signUp({email: this.email, password: this.password}).then(
      user => {
        this.router.navigate(['/home'])
      }
    ).catch(error => {
      this.presentToast(error.message).then(value => {})
    });

  }
}
