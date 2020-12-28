import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product: Product = {
    name: null,
    price: null
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductById()
  }

  getProductById(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.getProductById(id).subscribe( product => {
      this.product = product
    })
  }

  deleteProduct(): void { 
    this.productService.deleteProduct(this.product.id).subscribe( product => {
      console.log(product)
      this.productService.showMessage('Produto foi deletado com sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['products'])
  }
}
