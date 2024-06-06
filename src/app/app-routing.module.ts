import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProtegidaComponent } from './Components/protegida/protegida.component';
import { authGuard } from './Guards/auth.guard';
import { InfoRutaComponent } from './Components/info-ruta/info-ruta.component';
import { RutasComponent } from './Components/rutas/rutas.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'rutas', component:RutasComponent},
  {path: 'protegida', component:ProtegidaComponent, canActivate: [authGuard]},
  {path: 'info-ruta/:id', component:InfoRutaComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}, //Redirección por defecto
  {path: '**', pathMatch: 'full', redirectTo: 'home'}  //Redirección a home para cualquier otra ruta no definida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
