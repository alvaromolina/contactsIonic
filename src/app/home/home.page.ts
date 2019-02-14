import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


interface Contact{
  name: string;
  lastName: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo: string = 'Hello';
  disabledButton: boolean = false;
  showButton: boolean = false;

  contact: Contact = {name: "Juan", lastName: "Perez"};

  contacts: Contact[] = [{name: "Juan", lastName: "Perez"}, {name: "Pedro", lastName: "Ramirez"}]
  constructor(public alertController: AlertController){
    
  }

  async showAlert(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
