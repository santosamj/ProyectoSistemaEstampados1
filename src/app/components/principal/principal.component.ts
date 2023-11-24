import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { Opciones } from 'src/app/interfaces/Opciones';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';




@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})


export class PrincipalComponent implements OnInit {
  
  
  displayedColumns: string[] = ['position', 'nombre', 'apellido', 'direccion','objeto', 'tipo','color','monto'];
  dataSource = new MatTableDataSource(this.displayedColumns);
  constructor(){

  }
  ngOnInit(): void {
    
  }
  
  }



  
  