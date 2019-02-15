import { ContactServiceService } from './../contact-service.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


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

  constructor(public alertController: AlertController,
    public contactServiceService: ContactServiceService){
  }


  
  ngOnInit() {
    this.showAlert({name: "Juan", lastName: "Perez"});
  }

  getContacts(){
    console.log(this.contactServiceService.getContacts());
    return this.contactServiceService.getContacts();
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
