import { Router } from '@angular/router';
import { StatusService } from './../status.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.page.html',
  styleUrls: ['./add-status.page.scss'],
})
export class AddStatusPage implements OnInit {
  status: string;
  image: string;
  lt: number = 0;
  lg: number = 0;
  map: GoogleMap;


  constructor(private statusService: StatusService,
      private router: Router, 
      private camera: Camera,
      private geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lt = resp.coords.latitude
      this.lg = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.lt = data.coords.latitude
      this.lg = data.coords.longitude
    });
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: this.lt,
          lng: this.lg
        },
        zoom: 18,
        tilt: 30
      }
    });

  }
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     })

  }

  addStatus(){
    this.statusService.addStatus({status:this.status, image: this.image})
    this.router.navigate(['/home/status']);
  }

}
