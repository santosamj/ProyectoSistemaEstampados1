import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosCompartidosService {
  private datosCarrito = new BehaviorSubject<any>(null);
  datosCarritoActualizados = this.datosCarrito.asObservable();

  actualizarDatosCarrito(datos: any) {
    this.datosCarrito.next(datos);
  }
}