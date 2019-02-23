import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators/';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';



const url: string  = "https://reqres.in/api/users?per_page=10";

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  contacts: AngularFireList<Contact> = null;
  userId: string;

  constructor(public httpClient: HttpClient, private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }
    

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
  public getContactsList(): AngularFireList<Contact> {
    if (!this.userId) return;
    this.contacts = this.db.list(`contacts/${this.userId}`);
    return this.contacts
  }
  createContact(contact: Contact) {
    this.contacts.push(contact);
  }

    
  public getContacts(){
    return this.contacts;
  }

  getContactsHttp(){
    return this.httpClient.get(url).pipe(
      retry(3),
      catchError(this.handleError)
    );;
  }
}
