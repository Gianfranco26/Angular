import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaaccesoriosService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categoriaaccesorios', {
      query: {
        orderByChild: 'name'
      }
    });
  }
}
