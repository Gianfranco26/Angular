import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './componentes/catalogo/productos/productos.component';
import { AccesoriosComponent } from './componentes/catalogo/accesorios/accesorios.component';
import { ShoppingCartComponent } from './componentes/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './componentes/check-out/check-out.component';
import { ShippingFormComponent } from './componentes/shipping-form/shipping-form.component';
import { ProductQuantityComponent } from './componentes/product-quantity/product-quantity.component';
import { ShoppingCartSummaryComponent } from './componentes/shopping-cart-summary/shopping-cart-summary.component';
import { OrderSuccessComponent } from './componentes/order-success/order-success.component';
import { OrderViewComponent } from './componentes/order-view/order-view.component';
import { ListOrderViewComponent } from './componentes/list-order-view/list-order-view.component';
import { MyOrdersComponent } from './componentes/my-orders/my-orders.component';
import { AdminOrdersComponent } from './componentes/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './componentes/admin/admin-products/admin-products.component';
import { AdminAccesoriesComponent } from './componentes/admin/admin-accesories/admin-accesories.component';
import { ProductFormComponent } from './componentes/admin/product-form/product-form.component';
import { AccesoryFormComponent } from './componentes/admin/accesory-form/accesory-form.component';

import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuardService} from './auth-guard.service';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'login', component: LoginComponent },
  { path: '' , component: InicioComponent},
  { path: 'productos' , component: ProductosComponent},
  {path: 'accesorios', component: AccesoriosComponent},
  { path: 'shopping-cart' , component: ShoppingCartComponent},

  {path: 'check-out', component: CheckOutComponent, canActivate : [AuthGuardService]},
  { path: 'my/orders' , component : MyOrdersComponent, canActivate : [AuthGuardService]},
      { path: 'order-details/:id', component: OrderViewComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id' , component : OrderSuccessComponent,canActivate : [AuthGuardService]},


      {
        path: 'admin/products/new',
         component : ProductFormComponent,
         canActivate : [AuthGuardService,AdminAuthGuard]
      },
      {
        path: 'admin/accesories/new',
         component : AccesoryFormComponent,
         canActivate : [AuthGuardService,AdminAuthGuard]
      },
      {
        path: 'admin/products/:id',
         component : ProductFormComponent,
         canActivate : [AuthGuardService,AdminAuthGuard]
      },
      {
        path: 'admin/accesories/:id',
         component : AccesoryFormComponent,
         canActivate : [AuthGuardService,AdminAuthGuard]
      },
      {
        path: 'admin/products',
         component : AdminProductsComponent,
         canActivate : [AuthGuardService,AdminAuthGuard]
      },
      {
        path: 'admin/accesories',
         component : AdminAccesoriesComponent,
         canActivate : [AuthGuardService,AdminAuthGuard]
      },
      { path: 'admin/orders',
        component : AdminOrdersComponent,
        canActivate : [AuthGuardService,AdminAuthGuard]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
