import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent {
  cliente: Cliente;
  constructor(private route: ActivatedRoute) { 
   
   const valor= route.snapshot.paramMap.get('element')!;
   
   console.log(valor);

   this.cliente =JSON.parse(valor);
   console.log(this.cliente.apellido);
  }
}
