import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
   listCliente:  Cliente[] = [
    {position: 1, nombre: 'Darwin', apellido: `p`, direccion: 'H',objeto:'d', tipo:'d', color:'y',  monto: 2},
  
  ];
  constructor() { }
  realizarPago(cliente:Cliente){
this.listCliente.unshift(cliente);

  }
}
