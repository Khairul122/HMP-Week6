import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpasta',
  templateUrl: './newpasta.page.html',
  styleUrls: ['./newpasta.page.scss'],
})
export class NewpastaPage implements OnInit {

  new_name=""
  new_desc=""
  new_price=0
  new_url=""

  arr_price:number[]=[]

  alertButtons=['OK']


  generateNumberOptions(start: number, end: number, step: number): number[] {
    const options: number[] = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
}
submitpasta()
{
this.foodservice.addPasta(this.new_name,this.new_url,this.new_desc,this.new_price)
this.router.navigate(['/pasta'])
}


  constructor(private foodservice:FoodserviceService,
              private router: Router) { }

  ngOnInit() {
    this.arr_price=this.generateNumberOptions(30000,60000,1000)
  }

}
