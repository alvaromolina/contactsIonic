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

  ngOnInit() {
    this.showAlert({name: "Juan", lastName: "Perez"});
  }

  contact: Contact = {name: "Juan", lastName: "Perez"};

  contacts: Contact[] = [{name: "Juan", lastName: "Perez"}, 
  {name: "Pedro", lastName: "Ramirez"},
  {name: "Maria", lastName: "Peralez"}]
  constructor(public alertController: AlertController){
    
  }

  async showAlert(contact: Contact){
    const alert = await this.alertController.create({
      header: 'Contacto',
      message: contact.name,
      buttons: ['OK']
    });

    await alert.present();
  }
}
