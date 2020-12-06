import { Accesory } from '../../../models/accesory';
import { AccesoriosService } from './../../../servicios/accesorios/accesorios.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-accesories',
  templateUrl: './admin-accesories.component.html',
  styleUrls: ['./admin-accesories.component.css']
})
export class AdminAccesoriesComponent implements OnInit, OnDestroy {

  accesories: Accesory[];
  subscription: Subscription;
  tableResource: DataTableResource<Accesory>;
  items: Accesory[] = [];
  itemCount: number;

  constructor( private productService: AccesoriosService ) {
    this.subscription = this.productService.getAll()
      .subscribe(accesories => {
        this.accesories = accesories
        this.initializeTable(accesories);
      });
   }
   private initializeTable(products: Accesory[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
   }

   reloadItems(params) {
     if(!this.tableResource) return; //because firebase take time to render data so initialize DataTableResource may be done after; reload calls whenever page changes or hit first time
    this.tableResource.query(params)
    .then(items => this.items = items);
   }

   filter(query: string) {
     let filteredAccesories = (query) ?
      this.accesories.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.accesories;

      this.initializeTable(filteredAccesories);
   }

   ngOnDestroy(): void {
     this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
