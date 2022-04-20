import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public api:ApiService,
    private route:ActivatedRoute) { }

  itemId = 0;
  itemInfo: any;
  imgSrc = '';
  gray = false;
  blur = 0;

  generateSrc(id=this.itemId, gray=false, blur=0){
    this.imgSrc = 'https://picsum.photos/id/'+this.itemId+'/1280/960?';
    this.gray ? this.imgSrc +='grayscale&' : null;
    this.blur > 0 ? this.imgSrc += 'blur=' + this.blur : null; 
    
  }

  grayscale(){
    this.imgSrc = this.api.bigImgPicsum(this.itemId);
    this.gray = !this.gray;
    this.generateSrc();
    console.log(this.gray);
  }

  addBlur(){
    this.blur <10 ? this.blur ++ : this.blur = 0;
    this.generateSrc();
  }



  ngOnInit(): void {
    this.itemId = this.route.snapshot.params['itemId'];
    
    this.api.getUrl(this.api.imgInfo(this.itemId)).subscribe(
      data => { 
        this.itemInfo = data;
        this.generateSrc();
        console.log(data);}
    )
  }

}
