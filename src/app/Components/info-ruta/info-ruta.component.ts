import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RutasService } from '../../Services/rutas.service';

@Component({
  selector: 'app-info-ruta',
  templateUrl: './info-ruta.component.html',
  styleUrl: './info-ruta.component.css'
})
export class InfoRutaComponent {
  ruta:any = {};

  constructor(private activateRoute:ActivatedRoute, private _rutaService:RutasService, public router:Router){
    this.activateRoute.params.subscribe(params => {
      this.ruta = this._rutaService.getRuta(params['id']);
    });
  }

  verRuta(id:number){
    this.router.navigate(['/info-ruta', id]);
  }
  
}
