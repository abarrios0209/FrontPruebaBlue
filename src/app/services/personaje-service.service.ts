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


  obtenerUnPersonajeRandom(): Observable<RespuestaGenericaDto<Personaje>> {
    return this.http.get<RespuestaGenericaDto<Personaje>>(`${this.apiUrl}`);
  }

  darLike( body:Personaje ): Observable<RespuestaGenericaDto<string>>{
    return this.http.post<RespuestaGenericaDto<string>>(`${this.apiUrl}/like`, body);
  }

  darDisLike( body:Personaje ): Observable<RespuestaGenericaDto<string>>{
    return this.http.post<RespuestaGenericaDto<string>>(`${this.apiUrl}/dislike`, body);
  }

  obtenerPersonajeConMasLikes(): Observable<RespuestaGenericaDto<Personaje>> {
    return this.http.get<RespuestaGenericaDto<Personaje>>(`${this.apiUrl}/con-mas-likes`);
  }

  obtenerPersonajeConMasDisLikes(): Observable<RespuestaGenericaDto<Personaje>> {
    return this.http.get<RespuestaGenericaDto<Personaje>>(`${this.apiUrl}/con-mas-dislikes`);
  }

  obtenerEstadoDelPikachu(): Observable<RespuestaGenericaDto<Personaje>> {
    return this.http.get<RespuestaGenericaDto<Personaje>>(`${this.apiUrl}/personaje/pikachu/status`);
  }

}
