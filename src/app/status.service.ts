import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  statusList: AngularFireList<Status>;

  constructor( db: AngularFireDatabase) { 
    this.statusList = db.list('status');
  }

  addStatus(status: Status){
    this.statusList.push(status);
  }

  getStatusList(){
    return this.statusList;
  }
}
