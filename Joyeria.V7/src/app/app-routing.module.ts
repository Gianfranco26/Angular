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

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'login', component: LoginComponent },
  { path: '' , component: ProductosComponent},
  { path: 'productos' , component: ProductosComponent},
  {path: 'accesorios', component: AccesoriosComponent},

  {path: 'check-out', component: CheckOutComponent},

  { path: 'shopping-cart' , component: ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
