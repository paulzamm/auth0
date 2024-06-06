import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProtegidaComponent } from './Components/protegida/protegida.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { InfoRutaComponent } from './Components/info-ruta/info-ruta.component';
import { RutasComponent } from './Components/rutas/rutas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    InfoRutaComponent,
    RutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule],
    providers: [
      provideAuth0({
        domain: 'dev-ni6y8k7qrxmme5px.us.auth0.com',
        clientId: '7e1RY23XS0MssZ5IfQRJ6m4Tut2LdgKw',
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      }),
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
