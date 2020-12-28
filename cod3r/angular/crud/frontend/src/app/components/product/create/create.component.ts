import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private router: Router,  
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe( () => {
      this.productService.showMessage('Operação realizada com sucesso!')
      this.router.navigate(['/products'])
    }, e => {
      console.log(`Erro ao criar novo produto: ${e.message}`)
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
