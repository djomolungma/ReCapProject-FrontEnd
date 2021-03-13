import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44329/api/Rentals/GetRentalDetails";

  constructor(private httpClient:HttpClient) { }//private httpClient:HttpClient bir injection dır!!! 'private' sadece bu class da geçerli demek javascripte

  getRentals():Observable<RentalResponseModel>{
    //api ye bağlama kodu
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);//this bu sınıfı ifade eder // get<RentalResponseModel> mepleme işlemi      
  }
}
