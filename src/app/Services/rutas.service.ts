import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RutasService {
  private rutas: Rutas[] = [
    {
      ciudad_origen: 'Quito',
      ciudad_destino: 'Guayaquil',
      precio: '15',
      descripcion: 'Ruta de la Sierra a la Costa',
      tipo: 'interno',
      id: 1,
    },

    {
      ciudad_origen: 'Cuenca',
      ciudad_destino: 'Loja',
      precio: '10',
      descripcion: 'Ruta de la Sierra al Sur',
      tipo: 'externo',
      id: 2,
    },
    {
      ciudad_origen: 'Manta',
      ciudad_destino: 'Portoviejo',
      precio: '13',
      descripcion: 'Ruta de la Costa Norte',
      tipo: 'interno',
      id: 3,
    },
    {
      ciudad_origen: 'Ambato',
      ciudad_destino: 'Riobamba',
      precio: '5',
      descripcion: 'Ruta de la Sierra Central',
      tipo: 'externo',
      id: 4,
    },
    {
      ciudad_origen: 'Guayaquil',
      ciudad_destino: 'Salinas',
      precio: '8',
      descripcion: 'Ruta de la Costa Sur',
      tipo: 'interno',
      id: 5,
    },
    {
      ciudad_origen: 'Quito',
      ciudad_destino: 'Mindo',
      precio: '18',
      descripcion: 'Ruta de la Sierra al Bosque Nublado',
      tipo: 'externo',
      id: 6,
    },
    {
      ciudad_origen: 'Cuenca',
      ciudad_destino: 'Gualaceo',
      precio: '20',
      descripcion: 'Ruta de la Sierra a los Pueblos Tradicionales',
      tipo: 'interno',
      id: 7,
    },
    {
      ciudad_origen: 'Manta',
      ciudad_destino: 'Montecristi',
      precio: '15',
      descripcion: 'Ruta de la Costa a los Pueblos Artesanales',
      tipo: 'externo',
      id: 8,
    },
    {
      ciudad_origen: 'Ambato',
      ciudad_destino: 'Baños',
      precio: '13',
      descripcion: 'Ruta de la Sierra a las Aguas Termales',
      tipo: 'interno',
      id: 9,
    },
    {
      ciudad_origen: 'Guayaquil',
      ciudad_destino: 'Playas',
      precio: '8',
      descripcion: 'Ruta de la Costa a las Playas',
      tipo: 'externo',
      id: 10,
    },
  ];
  
  getRuta( id:number ){
    return this.rutas.find( ruta => ruta.id == id );
  }

  getRutas(){
    return this.rutas;
  }

  buscarRutas( cadena:string ){

    let rutaArr:Rutas[] = [];
    cadena = cadena.toLowerCase();
    
    for(let i=0; i<this.rutas.length; i++){
      let ruta = this.rutas[i];

      let origen = ruta.ciudad_origen.toLowerCase();
      let destino = ruta.ciudad_destino.toLowerCase();

      if(origen.indexOf(cadena) >=0 || destino.indexOf(cadena) >=0){
        ruta.id = i;
        rutaArr.push(ruta);
      }
    }
    return rutaArr;
  } 
}

export interface Rutas {
  ciudad_origen: string;
  ciudad_destino: string;
  precio: string;
  descripcion: string;
  tipo: string;
  id: number;
}
