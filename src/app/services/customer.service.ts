import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "https://localhost:44329/api/Customers/GetAll";

  constructor(private httpClient:HttpClient) { }//private httpClient:HttpClient bir injection dır!!! 'private' sadece bu class da geçerli demek javascripte
  
  getCustomers():Observable<CustomerResponseModel>{
    //api ye bağlama kodu
    return this.httpClient.get<CustomerResponseModel>(this.apiUrl);//this bu sınıfı ifade eder // get<BrandResponseModel> mepleme işlemi      
  }
}
