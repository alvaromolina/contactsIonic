import { AngularFireList } from '@angular/fire/database';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts: AngularFireList<Contact>;


  constructor(public alertController: AlertController,
    public contactServiceService: ContactServiceService,
    public loadingController: LoadingController,
    public auth: AuthService){
      this.auth.afAuth.authState.subscribe(user => {
        console.log(user);
        if(user){
          this.getContacts();
        }
      })

  }


  getContacts(){

    this.contacts = this.contactServiceService.getContactsList();
    
  }


  
  ngOnInit() {

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
