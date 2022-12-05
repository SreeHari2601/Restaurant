import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restuarants-list',
  templateUrl: './restuarants-list.component.html',
  styleUrls: ['./restuarants-list.component.css']
})
export class RestuarantsListComponent implements OnInit {

  //  properties 

   rest = "All restaurant List"

    // to hold restaurant list 

    restaurantList: any=[]

    //to hold searchterm

    searchTerm = ""

  //dependency injection
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    // api call -Asynchromous call - resolve state - subscribe
    this.apiService.getAllretuarantList()
    .subscribe((result)=>{
    this.restaurantList = result
    console.log(this.restaurantList);
    
    })

     // to get search term from apiservice

     this.apiService.search.subscribe((data)=>{
       this.searchTerm = data
     })


  }

}
