import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44338/api/Colors/GetAll";

  constructor(private httpClient:HttpClient) { }//private httpClient:HttpClient bir injection dır!!! 'private' sadece bu class da geçerli demek javascripte
  
  getColors():Observable<ColorResponseModel>{
    //api ye bağlama kodu
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);//this bu sınıfı ifade eder // get<BrandResponseModel> mepleme işlemi      
  }
}
