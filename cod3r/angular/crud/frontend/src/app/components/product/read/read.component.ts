import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  products: Product[] = null
  displayedColumns = ['id', 'name', 'price', 'action']
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe( (products) => {
      this.products = products
      console.log(this.products)
    }, 
    e => {
      console.log(`Erro ao ler produtos: ${e.message}`)
    })
  }
}
