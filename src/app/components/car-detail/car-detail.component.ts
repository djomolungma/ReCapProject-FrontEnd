import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:Car[]=[];
  carImages:CarImage[]=[];
  imageUrl = environment.baseURL;
  
  constructor(private carService:CarService,private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetails(params["carId"])
        this.getCarImagesByCarId(params["carId"])
      }
    })//observable olanlarda "subscribe()" kullanıyoruz
  }

  getCarDetails(carId:number){
    this.carService.getCarsByCarId(carId).subscribe(response=>{
        this.carDetails = response.data;
    })
  }

  getCarImagesByCarId(carId:number){
    this.carDetailService.getImageByCarId(carId).subscribe(response=>{
      this.carImages = response.data;
  })    
  }

  getCurrentCarImageClass(image:CarImage){
    if(image == this.carImages[0]){
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }
}
