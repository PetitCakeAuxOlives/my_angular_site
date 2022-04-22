import { Component, OnDestroy, OnInit } from '@angular/core';

import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(public settings:SettingsService) { }

  title = "Home";

  arrayImg = ['darts1.jpg', 'darts2.jpg', 'darts3.jpg'];

  jsonImg = [{url:'darts1.jpg',alt : "Fléchette de la mort 1"}, {url:'darts2.jpg', alt : "Fléchette de la mort 2"}, {url:'darts3.jpg', alt : "Fléchette de la mort 3"}];

  randomIndex = 0;

  sourceImg = "";

  count = 0;

  myProp = 'block';
  myValue = false;

  alert(msg: string){
    alert(msg);
  }

  changeImage(){
    this.randomIndex = Math.floor(Math.random()*3);

    this.sourceImg = this.arrayImg[this.randomIndex];
    
    this.count++;

    console.log(this.count);
  }

  ngOnInit(): void {
    this.settings.displayCarousel= true;
    this.changeImage();
  }

  ngOnDestroy(): void {
    console.log("Au revoir la home")
  }

}
