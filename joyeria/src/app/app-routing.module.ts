import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}, // cada vez que abre va a inicio
  {path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }