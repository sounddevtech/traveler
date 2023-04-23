import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  async fetchlocation(){
    
    const coordinates = await Geolocation.getCurrentPosition();
  
    console.log('Current position:', coordinates);





  };

  

}
