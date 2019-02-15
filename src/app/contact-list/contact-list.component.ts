import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  goToChat(name: string){
    this.router.navigate(['/chat',name]);
  }

}
