import { AngularFireList } from '@angular/fire/database';
import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  
  @Input() contacts: AngularFireList<Contact>;

  contactsList: Observable<Contact[]>;



  constructor(private router: Router) { }

  ngOnInit() {

    this.contactsList = this.contacts.valueChanges();
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
