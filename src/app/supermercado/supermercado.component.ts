import { Component, OnInit } from '@angular/core';
import {Producto} from '../model/producto';
import {ProductosService} from '../providers/productos.service';
@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  stocks : Array<Producto>;

  constructor(public productosService:ProductosService) {
    console.log("SupermercadoComponent Constructor");
    this.stocks= new Array<Producto>();



   }

  ngOnInit() {
    console.log("SupermercadoComponent ngOnInit");
    this.stocks= this.productosService.getAll();

  }

}
