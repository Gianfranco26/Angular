import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoriosService {

  constructor(private db: AngularFireDatabase) { }

  create(accesory) {
    return this.db.list('/accesorios').push(accesory);
  }

  getAll() {
    return this.db.list('/accesorios');
  }

  get(accesoryId) {
    return this.db.object('/accesorios/' + accesoryId);
  }

  update(accesoryId, accesory) {
    return this.db.object('/accesorios/' + accesoryId).update(accesory);
  }

  delete(accesoryId) {
    return this.db.object('/accesorios/' + accesoryId).remove();
  }
}
