import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  id:any
  neighborhood:any
  photograph:any
  monday:any
  tuesday:any
  wednesday:any
  thursday:any
  friday:any
  saturday:any
  sunday:any
  rname:any
  address:any
  cuisine_type:any
  rvname:any
  date:any
  rating:any
  Comments:any
  Latitude:any
  Longitude:any

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  addProduct() {
     
     let newRestaurant = {
       id:this.id,
       name:this.rname,
       neighborhood:this.neighborhood,
       photograph:this.photograph,
       address:this.address,
       lating:{
        lat:this.Latitude,
        lon:this.Longitude
       },
       cuisine_type:this.cuisine_type,
       operating_hours: {
        Monday:this.monday,
        Tuesday:this.tuesday,
        Wednesday:this.wednesday,
        Thursday:this.thursday,
        Friday:this.friday,
        Saturday:this.saturday,
        Sunday:this.sunday
      },
      reviews:[
        {
      
        name:this.rvname,
        date:this.date,
        rating:this.rating,
        comments:this.Comments
        
      }
    ]
     }
     console.log(newRestaurant);
     
    this.api.addRestuarant(newRestaurant)
     .subscribe(()=>{
      alert("submitted")
      this.router.navigateByUrl("")
    })
    
    
  }

}
