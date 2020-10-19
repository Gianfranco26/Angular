import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'accesory-filter',
  templateUrl: './accesory-filter.component.html',
  styleUrls: ['./accesory-filter.component.css']
})
export class AccesoryFilterComponent implements OnInit {

  categories$: FirebaseListObservable<any[]>;
  @Input('category') category;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
   }

  ngOnInit() {
  }

}
