import { Component,OnInit } from '@angular/core';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {

  Tablets = [
    {id: 1, img:"/././assets/tablet1.png", name: "iPad Pro 12.9-inch M2", price: "4 169 ₾", memory: "128GB", color: "⚪ ⚫", RAM: "8GB"},
    {id: 2, img:"/././assets/tablet2.png", name: "iPad Pro 12.9-inch M2", price: "4 539 ₾", memory: "256GB", color: "⚪ ⚫", RAM: "8GB"},
    {id: 3, img:"/././assets/tablet3.png", name: "iPad Pro 11-inch M2", price: "2 999 ₾", memory: "128GB", color: "⚪ ⚫", RAM: "8GB"},
    {id: 4, img:"/././assets/tablet4.png", name: "iPad Pro 11-inch M2 ", price: "3 399 ₾", memory: "256GB", color: "⚪ ⚫", RAM: "8GB"},
    {id: 5, img:"/././assets/tablet5.jpeg", name: "iPad Pro 12.9 M1", price: "4 399 ₾", memory: "128GB", color: "⚪ ⚫", RAM: "8GB"},
  ]

  filteredTablets: any[] = [];
  searchQuery: string = '';

  constructor( private searchService: SearchService) {
}


  ngOnInit(): void {
    this.searchService.searchQuery$.subscribe((query: any) => {
      this.searchQuery = query;
      this.filterProducts();
    });
  }


  filterProducts() {
    this.filteredTablets = this.Tablets.filter((tablet: any) => {
      return tablet.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

}
