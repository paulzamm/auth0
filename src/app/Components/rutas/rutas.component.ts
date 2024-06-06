import { Component } from '@angular/core';
import { Rutas, RutasService } from '../../Services/rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent {
  rutas: Rutas[] = [];

  constructor(private _rutasService: RutasService, public router:Router) {}

  mostrarRutas(opcion: string) {
    if (opcion === 'Todos') {
      this.rutas = this._rutasService.getRutas()
    }
    if(opcion === 'Interno'){
      this.rutas = this._rutasService.getRutas().filter(ruta => ruta.tipo === 'interno')
    }
    if(opcion === 'Externo'){
      this.rutas = this._rutasService.getRutas().filter(ruta => ruta.tipo === 'externo')
    }
  }

  verRuta(id:number){
    this.router.navigate(['/info-ruta', id]);
  }
}
