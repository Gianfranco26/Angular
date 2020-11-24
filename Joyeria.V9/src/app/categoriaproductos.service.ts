import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaproductosService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categoriaproductos', {
      query: {
        orderByChild: 'name'
      }
    });
  }
}
