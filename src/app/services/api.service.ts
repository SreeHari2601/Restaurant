import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // variables

  search = new BehaviorSubject("")

  constructor(private api:HttpClient) { }

  // userdefined function
  //1. get all restuarant list

  getAllretuarantList() {
    // call api call from :http://localhost:3000/restaurants 
    // get request -  httpclient httpClient Class - HTTPclent module
    return this.api.get('http://localhost:3000/restaurants')
  }


  //2.// to get a single restaurant detail

  viewRestaurant(restId:any) {
    // using rest id call api from :http://localhost:3000/restaurants/restId
    // http get method
    return this.api.get('http://localhost:3000/restaurants/'+restId)
    
  }
 // add new restaurant details

 addRestuarant(newRestaurant:any) {
   return this.api.post('http://localhost:3000/restaurants/', newRestaurant)
 }


 // to update particulur restaurant 

 updateRestaurant(restId:any,UpdatedRestBody:any){
  return this.api.put("http://localhost:3000/restaurants/"+restId,UpdatedRestBody)
 }

// to delete restaurant

deleteRestaurant(restId:any){
  return this.api.delete("http://localhost:3000/restaurants/"+restId)
}

}


 
 
