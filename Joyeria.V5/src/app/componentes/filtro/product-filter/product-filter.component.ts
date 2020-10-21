import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { CategoriaproductosService } from './../../../categoriaproductos.service';


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categoriaproductos$: FirebaseListObservable<any[]>;
  @Input('category') category;

  constructor(categoriaproductosService: CategoriaproductosService) {
    this.categoriaproductos$ = categoriaproductosService.getAll();
   }

  ngOnInit() {
  }

}

