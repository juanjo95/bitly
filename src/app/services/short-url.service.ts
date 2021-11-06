import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  urlBitly = 'https://api-ssl.bitly.com/v4/shorten';
  token = '9a91bcb28d8adc488a777d18fcbd8d81e2ffaec0';

  constructor(private http: HttpClient) { }

  getUrlShort(url:string):Observable<any>{
    const token = this.getToken();
    const body = {
      group_guid: "",
      domain: "bit.ly",
      long_url: url
    }
    return this.http.post(this.urlBitly,body,{headers: token});
  }

  getToken(){
    const tokenHeader = new HttpHeaders(
      {
        Authorization: 'Bearer '+this.token
      }
    );
    return tokenHeader;
  }
}
