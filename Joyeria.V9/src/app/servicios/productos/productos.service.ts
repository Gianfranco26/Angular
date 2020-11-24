import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/productos').push(product);
  }

  getAll() {
    return this.db.list('/productos');
  }

  get(productId) {
    return this.db.object('/productos/' + productId);
  }

  update(productId, product) {
    return this.db.object('/productos/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object('/productos/' + productId).remove();
  }
}