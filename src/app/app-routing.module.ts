import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { DeleteRetaurantComponent } from './delete-retaurant/delete-retaurant.component';
import { RestuarantsListComponent } from './restuarants-list/restuarants-list.component';
import { UpdatedRestaurantComponent } from './updated-restaurant/updated-restaurant.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';


// defining the path for components
const routes: Routes = [
  // restuarantlist components
  {
    path:"", component: RestuarantsListComponent 
  },
  {
    path:"view-restaurant/:id" , component : ViewRestaurantComponent
  },
  {
    path:"add-restaurant" , component : AddRestaurantComponent
  },
  {
    path:"update-restaurant/:id" , component :  UpdatedRestaurantComponent
  },
  {
    path:"delete-restaurant/:id" , component :  DeleteRetaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
