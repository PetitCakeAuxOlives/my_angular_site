import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  chuckApi = 'https://api.chucknorris.io/jokes/random';
  urlPicsum = "https://picsum.photos";
  urlPodek = 'http://dekpo.com/api/public/pictures/list?page=19&limit=3'

  getUrl(url:string){
    return this.http.get(url);
  }

  listPicsum(num:number){
    return this.urlPicsum+'/v2/list?page='+num+'&limit=9';
  }

  imgPicsum(id:number){
    return this.urlPicsum+'/id/' +id+ '/640/480';
  }

  bigImgPicsum(id:number){
    return this.urlPicsum+ '/id+' + id +'/1280/960';
  }

  imgInfo(id:number){
    return this.urlPicsum+ '/id/'+ id +'/info';
  }


}
