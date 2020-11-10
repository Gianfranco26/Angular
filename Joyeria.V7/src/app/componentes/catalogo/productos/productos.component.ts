import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from './../../../shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from './../../../servicios/productos/productos.service';
import { Product } from '../../../models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ShoppingCart } from '../../../models/shopping-cart';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private shoppingCartService: ShoppingCartService
  ) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  private populateProducts() {
    this.productosService
    .getAll()
    .switchMap( (products: Product[]) => {
      this.products = products;
      return this.route.queryParamMap;
    })
    .subscribe(params => {
      this.category = params.get('category');
      this.applyFilter();
    });
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) :
      this.products
  }

}