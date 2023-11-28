
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'PhonesDetails',
  templateUrl: './PhonesDetails.html',
  styleUrls: ['./PhonesDetails.css']
})
export class PhonesDetails implements OnInit {


  id = Number(this.Route.snapshot.paramMap.get('id'));

  Phones: any = [
    {id: 1, img:"/././assets/iphone 15 black.webp", name: "Iphone 15", price: "3 119 ₾", memory: "128GB", color: "⚫ 🔵 🔴 🟢", RAM: "6GB", camera: "48MP, 12MP front", size: "6.10", resolution: "1179x2556", inStock: "✔️", firstPhoto:"/././assets/iphone 15 black.webp", secondPhoto:"/././assets/iphone 15 blue.jpg", thirdPhoto:"/././assets/iphone 15 green.webp", fourthPhoto:"/././assets/iphone15pink.jpg", fifthPhoto: "/././assets/manyiphone15.jpg"},
    {id: 2, img:"/././assets/iphone 15 green.webp", name: "Iphone 15", price: "3 499 ₾", memory: "256GB", color: "⚫ 🔵 🔴 🟢", RAM: "6GB", camera: "48MP, 12MP front", size: "6.10", resolution: "1179x2556", inStock: "✔️", firstPhoto:"/././assets/iphone 15 black.webp", secondPhoto:"/././assets/iphone 15 blue.jpg", thirdPhoto:"/././assets/iphone 15 green.webp", fourthPhoto:"/././assets/iphone15pink.jpg", fifthPhoto: "/././assets/manyiphone15.jpg"},
    {id: 3, img:"/././assets/iphone 15 blue.jpg", name: "Iphone 15", price: "4 199 ₾", memory: "512GB", color: "⚫ 🔵 🔴 🟢", RAM: "6GB", camera: "48MP, 12MP front", size: "6.10", resolution: "1179x2556", inStock: "✔️", firstPhoto:"/././assets/iphone 15 black.webp", secondPhoto:"/././assets/iphone 15 blue.jpg", thirdPhoto:"/././assets/iphone 15 green.webp", fourthPhoto:"/././assets/iphone15pink.jpg", fifthPhoto: "/././assets/manyiphone15.jpg"},
    {id: 4, img:"/././assets/iphone15.png", name: "Iphone 15 pro", price: "3 999 ₾", memory: "128GB", color: "⚫ 🔵 ⚪ 🟤", RAM: "8GB", camera: "48MP, 12MP front", size: "6.10", resolution: "	2556x1179", inStock: "✔️", firstPhoto:"/././assets/iphone15.png", secondPhoto:"/././assets/iphonee.png", thirdPhoto:"/././assets/iphone15problack.jpeg", fourthPhoto:"/././assets/iphone15prowhite.jpeg", fifthPhoto: "/././assets/iphone15promany.jpg"},
    {id: 5, img:"/././assets/iphonee.png", name: "Iphone 15 pro", price: "4 399 ₾", memory: "256GB", color: "⚫ 🔵 ⚪ 🟤", RAM: "8GB",  camera: "48MP, 12MP front", size: "6.10", resolution: "	2556x1179", inStock: "✔️", firstPhoto:"/././assets/iphone15.png", secondPhoto:"/././assets/iphonee.png", thirdPhoto:"/././assets/iphone15problack.jpeg", fourthPhoto:"/././assets/iphone15prowhite.jpeg", fifthPhoto: "/././assets/iphone15promany.jpg"},
    {id: 6, img:"/././assets/iphone15.png", name: "Iphone 15 pro", price: "5 199 ₾", memory: "512GB", color: "⚫ 🔵 ⚪ 🟤", RAM: "8GB",  camera: "48MP, 12MP front", size: "6.10", resolution: "	2556x1179", inStock: "❌", firstPhoto:"/././assets/iphone15.png", secondPhoto:"/././assets/iphonee.png", thirdPhoto:"/././assets/iphone15problack.jpeg", fourthPhoto:"/././assets/iphone15prowhite.jpeg", fifthPhoto: "/././assets/iphone15promany.jpg"},
    {id: 7, img:"/././assets/iphone purple.avif", name: "Iphone 14 pro", price: "3 099 ₾", memory: "128GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6GB",  camera: "48MP, 12MP front", size: "6.10", resolution: "	2556x1179", inStock: "✔️", firstPhoto:"/././assets/iphone purple.avif", secondPhoto:"/././assets/silver iphone.jpeg", thirdPhoto:"/././assets/golden iphone.jpg", fourthPhoto:"/././assets/iphone14black.jpeg", fifthPhoto: "/././assets/iphone14many.webp"},
    {id: 8, img:"/././assets/silver iphone.jpeg", name: "Iphone 14 pro", price: "3 499 ₾", memory: "256GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6GB",  camera: "48MP, 12MP front", size: "6.10", resolution: "	2556x1179", inStock: "✔️", firstPhoto:"/././assets/iphone purple.avif", secondPhoto:"/././assets/silver iphone.jpeg", thirdPhoto:"/././assets/golden iphone.jpg", fourthPhoto:"/././assets/iphone14black.jpeg", fifthPhoto: "/././assets/iphone14many.webp"},
    {id: 9, img:"/././assets/golden iphone.jpg", name: "Iphone 14 pro", price: "3 899 ₾", memory: "512GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6GB",  camera: "48MP, 12MP front", size: "6.10", resolution: "	2556x1179", inStock: "✔️", firstPhoto:"/././assets/iphone purple.avif", secondPhoto:"/././assets/silver iphone.jpeg", thirdPhoto:"/././assets/golden iphone.jpg", fourthPhoto:"/././assets/iphone14black.jpeg", fifthPhoto: "/././assets/iphone14many.webp"},
    {id: 10, img:"/././assets/iphone purple.avif", name: "Iphone 14 pro max", price: "3 499 ₾", memory: "128GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6GB", camera: "48MP, 12MP front", size: "6.70", resolution: "2796x1290", inStock: "✔️", firstPhoto:"/././assets/iphone purple.avif", secondPhoto:"/././assets/silver iphone.jpeg", thirdPhoto:"/././assets/golden iphone.jpg", fourthPhoto:"/././assets/iphone14black.jpeg", fifthPhoto: "/././assets/iphone14many.webp"},
    {id: 11, img:"/././assets/black iphone14.jpg", name: "Iphone 14 pro max", price: "3 799 ₾", memory: "256GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6GB", camera: "48MP, 12MP front", size: "6.70", resolution: "2796x1290", inStock: "✔️", firstPhoto:"/././assets/iphone purple.avif", secondPhoto:"/././assets/silver iphone.jpeg", thirdPhoto:"/././assets/golden iphone.jpg", fourthPhoto:"/././assets/iphone14black.jpeg", fifthPhoto: "/././assets/iphone14many.webp"},
    {id: 12, img:"/././assets/silver iphone.jpeg", name: "Iphone 14 pro max", price: "4 299 ₾", memory: "512GB", color: "⚫ 🟣 ⚪ 🟡", RAM: "6GB", camera: "48MP, 12MP front", size: "6.70", resolution: "2796x1290", inStock: "❌", firstPhoto:"/././assets/iphone purple.avif", secondPhoto:"/././assets/silver iphone.jpeg", thirdPhoto:"/././assets/golden iphone.jpg", fourthPhoto:"/././assets/iphone14black.jpeg", fifthPhoto: "/././assets/iphone14many.webp"},
  ]



  constructor(private Route: ActivatedRoute){

    }


  selectedPhones: any;
  changeimg(src: string) {
    this.selectedPhones.img = src;
    }

  filteredProducts: any[] = this.Phones;

  ngOnInit(): void {
    this.selectedPhones = this.Phones.find( (product: any)=> {
      return product.id === this.id
    });
  }
}





