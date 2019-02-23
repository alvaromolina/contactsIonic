import { Router } from '@angular/router';
import { StatusService } from './../status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.page.html',
  styleUrls: ['./add-status.page.scss'],
})
export class AddStatusPage implements OnInit {
  status: string;
  constructor(private statusService: StatusService,
      private router: Router ) { }

  ngOnInit() {
  }

  addStatus(){
    this.statusService.addStatus({status:this.status})
    this.router.navigate(['/home/status']);
  }

}
