import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from '../services/short-url.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  btnString: string = 'Shorter';
  url:string = '';
  urlShort:string = '';

  constructor(private shortService : ShortUrlService) { }

  ngOnInit(): void {
  }

  shorter():void{
    if(this.btnString == 'Shorter'){
      this.shortService.getUrlShort(this.url).subscribe(data => {
        this.urlShort = data.link;
      });
      this.btnString = 'Reset';
    }else{
      this.btnString = 'Shorter';
      this.url = '';
      this.urlShort = '';
    }
  }

}
