import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';

//import { BrandResponseModel } from 'src/app/models/brandResponseModel';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = [];
  currentBrand:Brand; //currentBrand:Brand = {brandId:0,brandName:""};  tsconfig.json den "strictPropertyInitialization": false yapıldı
  dataLoaded = false;
  filterText="";
  
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();//this fonksiyon dışındaki veriye ulaşmak için kullanılır
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{//burası asenkron çalışıyor
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentBrand(brand:Brand){
    //console.log(brand.name);
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
}


//ng serve --open       -tarayıcıda açmak için
//ng g service product  //product için yeni servis oluşturur

//yeni bootstrap versiyonunu kurmak için 
//yeni node başlat 
//npm install bootstrap@5.0.0-beta2   -enter tuşuna bas


