import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {


  pastas = [
    {
    name: "SALMON AGLIO OLIO",
    url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/salmon-aglio-olio.png",
    description: "Pasta Spaghetti, Cabai, Paprika Hijau, Bawang Putih dengan Salmon Panggang",
    price :52000
    },
    {
    name: "CLASSIC FETTUCCINE",
    url:"https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/Classic-Fettuccine-With-Crispy-Chicken.png",
    description: "Pasta Fettuccine, Daging Ayam Asap, Saus Creamy dengan Chicken Strip dibalur Cream Cheese Mayo dan Beef Bits.",
    price: 35000,
    },
    {
    name: "CHEESE LAVA",
    url:"https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/Cheese-Lava.png",
    description: "Pasta Fusilli, Pepperoni Sapi, Saus Keju Cheddar, Beef Bits dengan Saus Cheese Fondue",
    price: 38000,
    },
    {
    name: "CREAMY TRUFFLE",
    url:"https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/CREAMY-TRUFFLE.png",
    description: "Pasta Penne, Sosis Beef Chorizo,Bayam, Saus Alfredo, dan Truffle Oil",
    price: 42000,
    },
    {
    name: "SALMON MENTAIKO",
    url:"https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/CLASSIC-SALMON-MENTAIKO.png",
    description: "Pasta Spaghetti, Ikan Salmon Fillet, Saus Mayo Mentai, dan Nori.",
    price: 56000,
    },
    ];

    addPasta(p_name:string,p_url:string,p_description:string,p_price:number)
{
  this.pastas.push({name:p_name, url:p_url,description:p_description,price:p_price})
}

  constructor() { }
}
