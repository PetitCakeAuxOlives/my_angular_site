import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  chuckApi = 'https://api.chucknorris.io/jokes/random';

  getUrl(url:string){
    return this.http.get(url);
  }

  listPicsum(num:number){
    return 'https://picsum.photos/v2/list?page='+num+'&limit=9';
  }

  imgPicsum(id:number){
    return 'https://picsum.photos/id/' +id+ '/640/480';
  }

  bigImgPicsum(id:number){
    return 'https://picsum.photos/id/' +id+ '/1280/960';
  }

  imgInfo(id:number){
    return 'https://picsum.photos/id/'+ id +'/info';
  }


}
