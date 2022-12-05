import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestuarantsListComponent } from './restuarants-list/restuarants-list.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdatedRestaurantComponent } from './updated-restaurant/updated-restaurant.component';
import { DeleteRetaurantComponent } from './delete-retaurant/delete-retaurant.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RestuarantsListComponent,
    ViewRestaurantComponent,
    AddRestaurantComponent,
    UpdatedRestaurantComponent,
    DeleteRetaurantComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
