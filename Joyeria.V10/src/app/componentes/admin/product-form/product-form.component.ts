import { ProductosService } from './../../../servicios/productos/productos.service';
import { CategoriaproductosService } from './../../../categoriaproductos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private categoryService: CategoriaproductosService,
      private productService: ProductosService 
    ) {
      this.categories$ = categoryService.getAll();
      this.id = this.route.snapshot.paramMap.get('id');
      if(this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
   }

  save(product) {
    if(this.id) this.productService.update(this.id, product);

    else this.productService.create(product);
     

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if( !confirm('¿Está seguro de querer eliminar este producto?') ) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);

  }

  ngOnInit() {
  }

}
