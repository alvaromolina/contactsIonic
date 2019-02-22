import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string;
  password: string;
  password_repeat: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register(){

    this.auth.signUp({email: this.email, password: this.password}).then(
      user => {
        console.log(user);
      }
    );

  }
}
