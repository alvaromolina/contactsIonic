import { Component } from '@angular/core';

interface Customer{
  name: string;
  lastName: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo: string = 'Hello';
  disabledButton: boolean = true;
  contact: Customer = {name: "Juan", lastName: "Perez"};

}
