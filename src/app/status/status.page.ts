import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAddStatus(){
    this.router.navigate(['/home/status/add'])
  }

}
