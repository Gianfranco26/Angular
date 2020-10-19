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
import { RelojesComponent } from './componentes/catalogo/accesorios/relojes/relojes.component';
import { AnillosComponent } from './componentes/catalogo/productos/anillos/anillos.component';
import { PulserasComponent } from './componentes/catalogo/productos/pulseras/pulseras.component';
import { CollaresComponent } from './componentes/catalogo/productos/collares/collares.component';
import { ArosComponent } from './componentes/catalogo/productos/aros/aros.component';

import { CatalogoService } from './servicios/catalogo.service';
import { ProductosService } from './servicios/productos/productos.service';
import { AccesoriosService } from './servicios/accesorios/accesorios.service';
import { RelojesService } from './servicios/accesorios/relojes/relojes.service';
import { AnillosService } from './servicios/productos/anillos/anillos.service';
import { ArosService } from './servicios/productos/aros/aros.service';
import { CollaresService } from './servicios/productos/collares/collares.service';
import { PulserasService } from './servicios/productos/pulseras/pulseras.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { CategoryService } from './category.service';


import { CustomFormsModule } from 'ng2-validation';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductFilterComponent } from './componentes/filtro/product-filter/product-filter.component';
import { AccesoryFilterComponent } from './componentes/filtro/accesory-filter/accesory-filter.component';
import { AccesoryCardComponent } from './accesory-card/accesory-card.component';




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
    RelojesComponent,
    AnillosComponent,
    PulserasComponent,
    CollaresComponent,
    ArosComponent,
    LoginComponent,
    ProductFilterComponent,
    AccesoryFilterComponent,
    AccesoryCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment. firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
  ProductosService,
  AccesoriosService,
  RelojesService,
  AnillosService,
  ArosService,
  CollaresService,
  PulserasService,
  CatalogoService,
  UserService,
  AuthGuardService,
  AdminAuthGuardService,
  AuthService,
  CategoryService
  ],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
