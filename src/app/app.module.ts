import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { PreciosComponent } from './Components/precios/precios.component';
import { ProtegidaComponent } from './Components/protegida/protegida.component';
import { provideAuth0 } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent
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
