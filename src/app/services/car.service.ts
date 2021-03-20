import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
//import { CarResponseModel } from '../models/carResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44329/api/";
  
  constructor(private httpClient:HttpClient) { }//private httpClient:HttpClient bir injection dır!!! 'private' sadece bu class da geçerli demek javascripte

  getCars():Observable<ListResponseModel<Car>>{
    //api ye bağlama kodu
    let newPath = this.apiUrl + "cars/GetCarDetails";//GetCarDetails
    return this.httpClient.get<ListResponseModel<Car>>(newPath);//this bu sınıfı ifade eder // get<CarResponseModel> mepleme işlemi      
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{  
    let newPath = this.apiUrl + `cars/GetCarDetailsByColor?colorId=${colorId}`;  
    return this.httpClient.get<ListResponseModel<Car>>(newPath);//this bu sınıfı ifade eder // get<ProductResponseModel> mepleme işlemi      
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{  
    let newPath = this.apiUrl + `cars/GetCarDetailsByBrand?brandId=${brandId}`;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);//this bu sınıfı ifade eder // get<ProductResponseModel> mepleme işlemi      
  }

  getCarsByColorAndBrand(colorId:number,brandId:number):Observable<ListResponseModel<Car>>{      
    let newPath = this.apiUrl;
    
    if (colorId > 0 && brandId > 0)
    {
      newPath += `cars/GetCarDetailsByColorAndBrand?colorId=${colorId}&&brandId=${brandId}`;
    }
    else if (colorId > 0)
    {
      newPath += `cars/GetCarDetailsByColor?colorId=${colorId}`;
    }
    else if (brandId > 0)
    {
      newPath += `cars/GetCarDetailsByBrand?brandId=${brandId}`;
    }
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<Car>>(newPath);//this bu sınıfı ifade eder // get<ProductResponseModel> mepleme işlemi      
  }

  getCarsByCarId(carId:number):Observable<ListResponseModel<Car>>{  
    let newPath = this.apiUrl + `cars/GetCarDetailsByCar?carId=${carId}`;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);//this bu sınıfı ifade eder // get<ProductResponseModel> mepleme işlemi      
  }

  
}
