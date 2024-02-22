import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private Base_URL : string = "http://localhost:8080/api/cliente"
  private httpHeader : HttpHeaders = new HttpHeaders({"Content-Type" : "application/json"})

  constructor(private http : HttpClient) { }

  guardarUsuario(usuario : Usuario) : Observable<Usuario> {

    return this.http.post<Usuario>(this.Base_URL, usuario, {headers : this.httpHeader})

  }

  getUsuario() : Observable<Usuario[]> {

    return this.http.get<Usuario[]>(this.Base_URL)

  }

}
