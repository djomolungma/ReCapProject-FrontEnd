import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {
  colors:Color[] = [];
  brands:Brand[] = [];
  colorFilter:number =0;
  brandFilter:number =0;

  constructor(
    private brandService: BrandService,
    private colorService: ColorService
    ) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  
  getColors(){
    this.colorService.getColors().subscribe((response)=> {
      this.colors = response.data;
    })
  }
  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands = response.data;
    })
  }
  
  getSelectedColor(colorId:number){        
    if(this.colorFilter === colorId)
    {
      //console.log(colorId);  
      return true;
    }        
    else 
      return false;
  }
  getSelectedBrand(brandId:number){        
    //console.log(this.brandFilter)
    if(this.brandFilter === brandId)
    {
      //console.log(brandId);
      return true;
    }
      
    else 
      return false;
  }

}
