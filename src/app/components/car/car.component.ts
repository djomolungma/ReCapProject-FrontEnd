import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];  
  dataLoaded = false;
  filterText="";
  

  constructor(
    private carService:CarService, 
    private colorService:ColorService, 
    private brandService:BrandService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    

    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"]){
        console.log("color_brand");
        this.getCarsByColorAndBrand(params["colorId"],params["brandId"])
      }
      else if(params["colorId"]){
        console.log("color");
        this.getCarsByColor(params["colorId"])
      }else if(params["brandId"]){
        console.log("brand");
          this.getCarsByBrand(params["brandId"])
      }else{
        this.getCars();//this fonksiyon dışındaki veriye ulaşmak için kullanılır
      }
    })//observable olanlarda "subscribe()" kullanıyoruz    
  }

  getCarsByColorAndBrand(colorId:number,brandId:number){
    this.carService.getCarsByColorAndBrand(colorId,brandId).subscribe(response=>{//burası asenkron çalışıyor
      this.cars = response.data;
      this.dataLoaded = true;
      })
  }

  getCars(){
      this.carService.getCars().subscribe(response=>{//burası asenkron çalışıyor
      this.cars = response.data;
      this.dataLoaded = true;
      })
    }

    

    getCarsByColor(colorId:number){    
      this.carService.getCarsByColor(colorId).subscribe(response=>{//burası asenkron çalışıyor
        this.cars = response.data;
        this.dataLoaded = true;      
      })    
    }

    getCarsByBrand(brandId:number){    
      this.carService.getCarsByBrand(brandId).subscribe(response=>{//burası asenkron çalışıyor
        this.cars = response.data;
        this.dataLoaded = true;      
      })    
    }    

}
