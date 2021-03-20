import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},//pathMatch:"full" --ana sayfa için verilir (http://localhost:4200)
  {path:"cars",component:CarComponent},             //hangi adreste ne getireceğini yazdık      (http://localhost:4200/cars)
  {path:"cars/color/:colorId",component:CarComponent},   //parametre verilecekse ":" kullanılır burada "id"  değişkendir
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/filter/:colorId/:brandId",component:CarComponent},
  {path:"cars/filter/:colorId",component:CarComponent},
  {path:"cars/filter/:brandId",component:CarComponent},
  {path:"cars/:carId",component:CarComponent},
  {path:"cardetail/:carId",component:CarDetailComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
