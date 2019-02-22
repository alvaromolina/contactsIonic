import { AlertController } from '@ionic/angular';
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
    private alertController: AlertController) { }

  ngOnInit() {
  }

  email: string;
  password: string;



  public login(){

    this.auth.signInWithEmail({email: this.email, password: this.password}).then(user => {
        if(user){
          this.router.navigate(['/home']);
        }else{
            console.log(user);
            const alert = this.alertController.create({
              header: 'Error',
              message: "Error al login",
              buttons: ['OK']
            });
            alert.then(()=>{});
        
        }
    })

  }

}
