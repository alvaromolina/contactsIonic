import { StatusService } from './../status.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  listStatus: Observable<Status[]>;

  constructor(private router: Router, private statusService: StatusService) { 

    this.listStatus = this.statusService.getStatusList().valueChanges();
  }

  ngOnInit() {
    
  }

  goToAddStatus(){
    this.router.navigate(['/home/status/add'])
  }

}
