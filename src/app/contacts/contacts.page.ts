import { AngularFireList } from '@angular/fire/database';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ContactServiceService } from '../contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {


  constructor(public alertController: AlertController,
    public loadingController: LoadingController,
    public router: Router){

  }



  
  ngOnInit() {

  }

  goToAddContact(){
    this.router.navigate(['/home/contacts/add'])
  }
  
  async showAlert(contact: Contact){
    const alert = await this.alertController.create({
      header: 'Contacto',
      message: contact.first_name,
      buttons: ['OK']
    });

    await alert.present();
  }
}
