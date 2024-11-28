import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../models/Personaje';
import { Observable } from 'rxjs';
import { RespuestaGenericaDto } from '../models/RespuestaGenericaDto';

@Injectable({
  providedIn: 'root'
})
export class PersonajeServiceService {

  private apiUrl = 'http://localhost:8080/api/personajes'

  constructor( private http: HttpClient ) { }


  obtenerUnPersonajeRandom(): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}`);
  }

  darLike( body:Personaje ): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/like`, body);
  }

  darDisLike( body:Personaje ): Observable<any>{
    return this.http.post<Personaje>(`${this.apiUrl}/dislike`, body);
  }

  obtenerPersonajeConMasLikes(): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}/con-mas-likes`);
  }

  obtenerPersonajeConMasDisLikes(): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}/con-mas-dislikes`);
  }

  obtenerEstadoDelPikachu(): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}/personaje/pikachu/status`);
  }

}
