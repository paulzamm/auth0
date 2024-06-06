import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Rutas, RutasService } from '../../Services/rutas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrl: './protegida.component.css',
})
export class ProtegidaComponent {
  rutas: Rutas[] = [];

  constructor(
    public _auth: AuthService,
    public _rutasService: RutasService,
    public activateRouter:ActivatedRoute,
    public router:Router
  ) {}
  
  buscarRuta(cadena:string){
    this.rutas = this._rutasService.buscarRutas(cadena);
  }
  
  verRuta(id:number){
    this.router.navigate(['/info-ruta', id]);
  }
}
