import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  public logOut(){
    this.auth.signOut().then(result => {
      console.log(result);
    },
    err => console.log(err))
  }

}
