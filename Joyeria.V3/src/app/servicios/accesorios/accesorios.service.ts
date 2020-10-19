import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoriosService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/accesorios').push(product);
  }

  getAll() {
    return this.db.list('/accesorios');
  }

  get(productId) {
    return this.db.object('/accesorios/' + productId);
  }

  update(productId, product) {
    return this.db.object('/accesorios/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object('/accesorios/' + productId).remove();
  }
}
