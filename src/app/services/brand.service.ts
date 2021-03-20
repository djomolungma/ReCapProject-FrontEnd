import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//api ye bağlanma kodu (backend teki dataya erişim için)
//import { BrandResponseModel } from '../models/brandResponseModel';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';



@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44329/api/Brands/GetAll";

  constructor(private httpClient:HttpClient) { }//private httpClient:HttpClient bir injection dır!!! 'private' sadece bu class da geçerli demek javascripte
  
  getBrands():Observable<ListResponseModel<Brand>>{
    //api ye bağlama kodu
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);//this bu sınıfı ifade eder // get<BrandResponseModel> mepleme işlemi      
  }  
}
