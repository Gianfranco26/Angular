import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { NavbarComponent } from './componentes/compartidos/navbar/navbar.component';
import { FooterComponent } from './componentes/compartidos/footer/footer.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { ProductosComponent } from './componentes/catalogo/productos/productos.component';
import { AccesoriosComponent } from './componentes/catalogo/accesorios/accesorios.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { LoginComponent } from './login/login.component';
import { ProductFilterComponent } from './componentes/filtro/product-filter/product-filter.component';
import { AccesoryFilterComponent } from './componentes/filtro/accesory-filter/accesory-filter.component';
import { AccesoryCardComponent } from './componentes/accesory-card/accesory-card.component';
import { ShoppingCartComponent } from './componentes/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './componentes/check-out/check-out.component';
import { ShippingFormComponent } from './componentes/shipping-form/shipping-form.component';
import { ProductQuantityComponent } from './componentes/product-quantity/product-quantity.component';
import { ShoppingCartSummaryComponent } from './componentes/shopping-cart-summary/shopping-cart-summary.component';
import { OrderSuccessComponent } from './componentes/order-success/order-success.component';
import { OrderViewComponent } from './componentes/order-view/order-view.component';
import { ListOrderViewComponent } from './componentes/list-order-view/list-order-view.component';
import { MyOrdersComponent } from './componentes/my-orders/my-orders.component';


import { CatalogoService } from './servicios/catalogo.service';
import { ProductosService } from './servicios/productos/productos.service';
import { AccesoriosService } from './servicios/accesorios/accesorios.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AuthGuardService} from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { CategoriaaccesoriosService } from './categoriaaccesorios.service';
import { CategoriaproductosService } from './categoriaproductos.service';
import { OrderService } from './order.service';

import { CustomFormsModule } from 'ng2-validation';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercadeComponent,
    NavbarComponent,
    FooterComponent,
    NosotrosComponent,
    CatalogoComponent,
    ProductCardComponent,
    ProductosComponent,
    AccesoriosComponent,
    LoginComponent,
    ProductFilterComponent,
    AccesoryFilterComponent,
    AccesoryCardComponent,
    ShoppingCartComponent,
    ProductQuantityComponent,
    CheckOutComponent,
    ShippingFormComponent,
    ShoppingCartSummaryComponent,
    OrderSuccessComponent,
    OrderViewComponent,
    ListOrderViewComponent,
    MyOrdersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment. firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
  ProductosService,
  AccesoriosService,
  CatalogoService,
  UserService,
  AuthGuardService,
  AdminAuthGuardService,
  AuthService,
  CategoriaaccesoriosService,
  CategoriaproductosService,
  OrderService
  ],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
