import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-updated-restaurant',
  templateUrl: './updated-restaurant.component.html',
  styleUrls: ['./updated-restaurant.component.css']
})
export class UpdatedRestaurantComponent implements OnInit {
   restId:any;
   restDetails:any={}
  constructor(private activatedRoute:ActivatedRoute,private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
    // to get restuarant id to be updated
    this.activatedRoute.params.subscribe((result:any)=>{      
      this.restId=result['id']
    
    })
    // fetch restaurant details of restuarant id as restId
    this.apiService.viewRestaurant(this.restId).subscribe((result)=>{
      this.restDetails=result
      console.log(this.restDetails);
    })
  }

  updateRestaurant(form:any) {
    console.log(form.value);
    let updateRestDetails = {
      id:form.value.id,
       name:form.value.rname,
       neighborhood:form.value.neighborhood,
       photograph:form.value.photograph,
       address:form.value.address,
       lating:{
        lat:form.value.Lat,
        lon:form.value.Lng
       },
       cuisine_type:form.value.cuisine_type,
       operating_hours: {
        Monday:form.value.monday,
        Tuesday:form.value.tuesday,
        Wednesday:form.value.wednesday,
        Thursday:form.value.thursday,
        Friday:form.value.friday,
        Saturday:form.value.saturday,
        Sunday:form.value.sunday
      },
      reviews:[
        {
          name:form.value.rvname,
          date:form.value.date,
          rating:form.value.rating,
          comments:form.value.Comments
      }
    ]
    }
    this.apiService.updateRestaurant(this.restId,updateRestDetails).subscribe((data)=>{
      alert("Restaurant details successfully updated")
      this.router.navigateByUrl("")
    })
     
    
   }

}
