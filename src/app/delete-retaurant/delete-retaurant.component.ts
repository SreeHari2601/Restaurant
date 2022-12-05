import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-retaurant',
  templateUrl: './delete-retaurant.component.html',
  styleUrls: ['./delete-retaurant.component.css']
})
export class DeleteRetaurantComponent implements OnInit {

 restId:any

  constructor(private activatedRoute :ActivatedRoute,private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result)=>{
      console.log(result['id']);
      this.restId=result['id']
    
    })
    this.api.deleteRestaurant(this.restId).subscribe(()=>{
      alert("this restaurant has been removed")
      this.router.navigateByUrl("")
    })
  }

}
