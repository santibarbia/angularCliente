import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  url:string = "http://localhost:8080/v1/categorias";

  constructor( private _http:HttpClient ) {

   }

   obtenerCategorias(){
     return this._http.get(this.url);
   }
}
