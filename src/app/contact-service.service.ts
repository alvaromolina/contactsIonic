import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  contacts: Contact[] = [{name: "Juan", lastName: "Perez"}, 
  {name: "Pedro", lastName: "Ramirez"},
  {name: "Maria", lastName: "Peralez"}];
  constructor() { 

  }

  public getContacts(){
    return this.contacts;
  }
}
