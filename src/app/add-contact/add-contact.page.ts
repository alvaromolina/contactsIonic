import { ContactServiceService } from './../contact-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {
  first_name: string;
  last_name: string;
  email: string;

  constructor(private contactServiceService: ContactServiceService) { }

  ngOnInit() {
  }

  addContact(){
    let contact: Contact = { first_name: this.first_name, 
      last_name: this.last_name,
      email: this.email,
      avatar: ''}
    this.contactServiceService.createContact(contact).then(result => {
      console.log(result);
    })
  }

}
