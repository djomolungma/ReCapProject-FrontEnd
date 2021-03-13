import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44329/api/cars/GetCarDetails";

  constructor(private httpClient:HttpClient) { }//private httpClient:HttpClient bir injection dır!!! 'private' sadece bu class da geçerli demek javascripte

  getCars():Observable<CarResponseModel>{
    //api ye bağlama kodu
    return this.httpClient.get<CarResponseModel>(this.apiUrl);//this bu sınıfı ifade eder // get<CarResponseModel> mepleme işlemi      
  }
}
