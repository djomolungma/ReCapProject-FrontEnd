import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] =[];
  currentColor:Color;//currentBrand:Brand = {brandId:0,brandName:""};  tsconfig.json den "strictPropertyInitialization": false yapıldı
  dataLoaded = false;
  filterText="";
  
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();//this fonksiyon dışındaki veriye ulaşmak için kullanılır
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
      this.dataLoaded =true;
    }
    )}

    setCurrentColor(color:Color){
      //console.log(color.name);
      this.currentColor = color;
    }

    getCurrentColorClass(color:Color){
        if(color == this.currentColor)
        {
          return "list-group-item active";
        }
        else{
          return "list-group-item";
        }
    }

    getAllColorClass(){
      if(!this.currentColor)
      {
        return "list-group-item active";
      }
      else{
        return "list-group-item";
      }
    }
}
