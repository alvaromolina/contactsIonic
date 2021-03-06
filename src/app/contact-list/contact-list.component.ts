import { AngularFireList } from '@angular/fire/database';
import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../auth.service';
import { ContactServiceService } from '../contact-service.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {


  contactsList: Observable<Contact[]> = null;

  constructor(private router: Router, 
    public auth: AuthService,
    public contactServiceService: ContactServiceService) { 
    this.auth.afAuth.authState.subscribe(user => {
      console.log(user);
      if(user){
        this.getContacts();
      }
    })
  }

  ngOnInit(){
  }
  

  getContacts(){

    this.contactsList = this.contactServiceService.getContactsList().valueChanges();
    
  }



  goToChat(contact: Contact){
    let navigationExtras: NavigationExtras = {
      queryParams: contact
    };
    this.router.navigate(['/home/contacts/chat'], navigationExtras);
  }

  goToProfile(contact: Contact){
    let navigationExtras: NavigationExtras = {
      queryParams: contact
    };
    this.router.navigate(['/home/contacts/profile'], navigationExtras);
  }

}
