import { AccesoriosService } from './../../../servicios/accesorios/accesorios.service';
import { CategoriaaccesoriosService } from './../../../categoriaaccesorios.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-accesory-form',
  templateUrl: './accesory-form.component.html',
  styleUrls: ['./accesory-form.component.css']
})
export class AccesoryFormComponent implements OnInit {
  categories$;
  accesory = {};
  id;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private categoryService: CategoriaaccesoriosService,
      private accesoryService: AccesoriosService
    ) {
      this.categories$ = categoryService.getAll();
      this.id = this.route.snapshot.paramMap.get('id');
      if(this.id) this.accesoryService.get(this.id).take(1).subscribe(p => this.accesory = p);
   }

  save(accesory) {
    if(this.id) this.accesoryService.update(this.id, accesory);

    else this.accesoryService.create(accesory);
     

    this.router.navigate(['/admin/accesories']);
  }

  delete() {
    if( !confirm('¿Está seguro de querer eliminar este accesorio?') ) return;

    this.accesoryService.delete(this.id);
    this.router.navigate(['/admin/accesories']);

  }

  ngOnInit() {
  }

}
