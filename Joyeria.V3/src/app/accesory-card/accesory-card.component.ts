import { Accesory } from '../models/accesory';
import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'accesory-card',
  templateUrl: './accesory-card.component.html',
  styleUrls: ['./accesory-card.component.css']
})
export class AccesoryCardComponent {
  @Input('accesory') accesory: Accesory;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.accesory);
  }

}
