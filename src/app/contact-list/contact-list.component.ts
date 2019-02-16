import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  
  @Input() contacts: Contact[];


  constructor(private router: Router) { }

  ngOnInit() {
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
