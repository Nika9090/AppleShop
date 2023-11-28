import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'TabletsDetails',
  templateUrl: './TabletsDetails.html',
  styleUrls: ['./TabletsDetails.css']
})
export class TabletsDetails implements OnInit {

  id = Number(this.Route.snapshot.paramMap.get('id'))

  Tablets = [
    {id: 1, img:"/././assets/tablet1.png", name: "iPad Pro 12.9-inch M2", price: "4 169 ₾", memory: "128GB", color: "⚪ ⚫", RAM: "8GB", year: "2022", resolution: "2732 x 2048", camera: "12MP Wide and 12MP Ultra Wide sensors", inStock: "✔️", firstPhoto: "/././assets/tablet1.png", secondPhoto: "/././assets/tab1photo2.jpg", thirdPhoto: "/././assets/tab1photo3.webp", fourthPhoto: "/././assets/tab1photo4.jpg", fifthPhoto: "/././assets/tab1photo5.jpg"},
    {id: 2, img:"/././assets/tablet2.png", name: "iPad Pro 12.9-inch M2", price: "4 539 ₾", memory: "256GB", color: "⚪ ⚫", RAM: "8GB", year: "2022", resolution: "2732 x 2048", camera: "12MP Wide and 12MP Ultra Wide sensors", inStock: "✔️", firstPhoto: "/././assets/tablet2.png", secondPhoto: "/././assets/tab1photo2.jpg", thirdPhoto: "/././assets/tab1photo3.webp", fourthPhoto: "/././assets/tab1photo4.jpg", fifthPhoto: "/././assets/tab1photo5.jpg"},
    {id: 3, img:"/././assets/tablet3.png", name: "iPad Pro 11-inch M2", price: "2 999 ₾", memory: "128GB", color: "⚪ ⚫", RAM: "8GB", year: "2022", resolution: "2388 x 1668", camera: "12MP Wide and 12MP Ultra Wide sensors", inStock: "✔️", firstPhoto: "/././assets/tablet3.png", secondPhoto: "/././assets/tab2photo2.jpg", thirdPhoto: "/././assets/tab3photo3.jpg", fourthPhoto: "/././assets/tab3photo4.jpg", fifthPhoto: "/././assets/tab3photo5.jpg"},
    {id: 4, img:"/././assets/tablet4.png", name: "iPad Pro 11-inch M2 ", price: "3 399 ₾", memory: "256GB", color: "⚪ ⚫", RAM: "8GB", year: "2022", resolution: "2388 x 1668", camera: "12MP Wide and 12MP Ultra Wide sensors", inStock: "✔️",  firstPhoto: "/././assets/tablet4.png", secondPhoto: "/././assets/tab2photo2.jpg", thirdPhoto: "/././assets/tab3photo3.jpg", fourthPhoto: "/././assets/tab3photo4.jpg", fifthPhoto: "/././assets/tab3photo5.jpg"},
    {id: 5, img:"/././assets/tablet5.jpeg", name: "iPad Pro 12.9 M1", price: "4 399 ₾", memory: "128GB", color: "⚪ ⚫", RAM: "8GB", year: "2021", resolution: "2048 x 2732", camera: "Ultra Wide camera with a 12MP sensor and a 122 degree field of view", inStock: "✔️", firstPhoto: "/././assets/tablet5.jpeg", secondPhoto: "/././assets/tab5photo2.jpg", thirdPhoto: "/././assets/tab5photo3.jpg", fourthPhoto: "/././assets/tab5photo4.jpg", fifthPhoto: "/././assets/tab5photo5.jpeg"},
  ]

  selectedTablets: any;

  constructor(private Route: ActivatedRoute) {}

  changeimg(src: any) {
    return this.selectedTablets.img = src
  }

  ngOnInit(): void {
    this.selectedTablets = this.Tablets.find( (product) => {
      return product.id === this.id
    } )
  }

}
