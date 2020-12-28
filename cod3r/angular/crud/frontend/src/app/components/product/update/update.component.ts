import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  product: Product = {
    name: null,
    price: null
  }

  constructor(
    private productService: ProductService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getProductById()
  }


  getProductById(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.getProductById(id).subscribe( product => {
      this.product = product
    })
  }

  updateProduct():void {
   this.productService.updateProduct(this.product).subscribe( product => {
     this.productService.showMessage('Produto atualizado com sucesso.')
     this.router.navigate(['/products'])
   })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
