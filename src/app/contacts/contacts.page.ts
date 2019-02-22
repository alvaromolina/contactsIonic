import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts: Contact[] = [];

  constructor(public alertController: AlertController,
    public contactServiceService: ContactServiceService,
    public loadingController: LoadingController){

      this.getContacts();
  }


  async getContacts(){
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.contactServiceService.getContactsHttp().subscribe(
      data => {
        this.contacts = (data as any).data;
        loading.dismiss();
    }, 
    error => {
      console.log(error);
      loading.dismiss();

    }
    )
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
