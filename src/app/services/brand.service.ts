import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//api ye bağlanma kodu (backend teki dataya erişim için)
import { BrandResponseModel } from '../models/brandResponseModel';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44338/api/Brands/GetAll";

  constructor(private httpClient:HttpClient) { }//private httpClient:HttpClient bir injection dır!!! 'private' sadece bu class da geçerli demek javascripte
  
  getBrands():Observable<BrandResponseModel>{
    //api ye bağlama kodu
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);//this bu sınıfı ifade eder // get<BrandResponseModel> mepleme işlemi      
  }  
}
