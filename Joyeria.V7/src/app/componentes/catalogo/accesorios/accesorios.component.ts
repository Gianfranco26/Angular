import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from './../../../shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { AccesoriosService } from './../../../servicios/accesorios/accesorios.service';
import { Accesory } from '../../../models/accesory';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ShoppingCart } from '../../../models/shopping-cart';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {

  accesories: Accesory[] = [];
  filteredAccesories: Accesory[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private accesoriosService: AccesoriosService,
    private shoppingCartService: ShoppingCartService
  ) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateAccesories();
  }

  private populateAccesories() {
    this.accesoriosService
    .getAll()
    .switchMap( (accesories: Accesory[]) => {
      this.accesories = accesories;
      return this.route.queryParamMap;
    })
    .subscribe(params => {
      this.category = params.get('category');
      this.applyFilter();
    });
  }

  private applyFilter() {
    this.filteredAccesories = (this.category) ?
      this.accesories.filter(p => p.category === this.category) :
      this.accesories
  }

}
