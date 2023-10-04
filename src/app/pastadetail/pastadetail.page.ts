import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
})
export class PastadetailPage implements OnInit {

  index=0


  pastas:any[] = []

  constructor(private route: ActivatedRoute, private foodservice:FoodserviceService) {}


  ngOnInit() {
    this.pastas=this.foodservice.pastas
    this.route.params.subscribe(params => {
      this.index = params['id']; // 'id' should match the route parameter name
      // You can use the 'id' parameter for your logic here
    });

  }

}
