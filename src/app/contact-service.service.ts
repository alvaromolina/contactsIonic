import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators/';


const url: string  = "https://reqres.in/api/users?per_page=10&delay=10";

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  contacts: Contact[] = [{first_name: "Juan", last_name: "Perez"}, 
  {first_name: "Pedro", lastName: "Ramirez"},
  {first_name: "Maria", lastName: "Peralez"}];
  constructor(public httpClient: HttpClient) { 

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
