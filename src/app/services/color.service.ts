import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
//import { ColorResponseModel } from '../models/colorResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44329/api/Colors/GetAll";

  constructor(private httpClient:HttpClient) { }//private httpClient:HttpClient bir injection dır!!! 'private' sadece bu class da geçerli demek javascripte
  
  getColors():Observable<ListResponseModel<Color>>{
    //api ye bağlama kodu
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);//this bu sınıfı ifade eder // get<BrandResponseModel> mepleme işlemi      
  }
}
