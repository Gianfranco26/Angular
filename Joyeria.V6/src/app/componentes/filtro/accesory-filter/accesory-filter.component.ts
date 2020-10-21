import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { CategoriaaccesoriosService } from './../../../categoriaaccesorios.service';
@Component({
  selector: 'accesory-filter',
  templateUrl: './accesory-filter.component.html',
  styleUrls: ['./accesory-filter.component.css']
})
export class AccesoryFilterComponent implements OnInit {

  categoriaaccesorios$: FirebaseListObservable<any[]>;
  @Input('category') category;

  constructor(categoriaaccesoriosService: CategoriaaccesoriosService) {
    this.categoriaaccesorios$ = categoriaaccesoriosService.getAll();
   }

  ngOnInit() {
  }

}
