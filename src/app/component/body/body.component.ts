import { Component, OnInit } from '@angular/core';
import { CategoriaServiceService } from 'src/app/services/categoria-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  categorias:any;
  arrCategorias:any;

  constructor( private _servicio:CategoriaServiceService) { }

  ngOnInit(): void {
    this._servicio.obtenerCategorias().subscribe(respuesta=>{
      console.log(respuesta)
      this.categorias = respuesta;
      this.arrCategorias = this.categorias.categoriaResponse.categoria;
    })
  }


}
