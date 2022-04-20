import { Component, OnInit } from '@angular/core';

import { ViewportScroller } from '@angular/common';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private scroll:ViewportScroller,
    public api:ApiService) { }

  joke:any;
  jokeNotFound = true;
  gallery: any;
  page = 1;
  urlPicsum = '';
  chuckApi = this.api.chuckApi;

  loadPics(way="",nb=this.page){
    switch(way){
      case 'next':
        this.page ++;
        break;
      case 'prev':
        this.page > 1 ? this.page-- : null;
        break;
      case '':
        this.page = nb;
        break;
    }
    this.urlPicsum = this.api.listPicsum(this.page);
    this.api.getUrl(this.urlPicsum).subscribe(
      data => {
        this.gallery = data;
        console.log(data);
      }
    )
    this.scroll.scrollToAnchor("top");
  }
  

  ngOnInit(): void {
    this.api.getUrl(this.chuckApi).subscribe(
    (data) => {
      this.joke = data;
      this.jokeNotFound = false;
      console.log(data);
     }
    )
    this.loadPics();
    }
}
