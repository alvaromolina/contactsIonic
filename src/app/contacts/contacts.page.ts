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

  contacts: AngularFireList<Contact>;


  constructor(public alertController: AlertController,
    public contactServiceService: ContactServiceService,
    public loadingController: LoadingController,
    public auth: AuthService,
    public router: Router){
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
