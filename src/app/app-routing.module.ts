import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PreciosComponent } from './Components/precios/precios.component';
import { ProtegidaComponent } from './Components/protegida/protegida.component';
import { authGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'precios', component:PreciosComponent},
  {path: 'protegida', component:ProtegidaComponent, canActivate: [authGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'home'}, //Redirección por defecto
  {path: '**', pathMatch: 'full', redirectTo: 'home'}  //Redirección a home para cualquier otra ruta no definida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
