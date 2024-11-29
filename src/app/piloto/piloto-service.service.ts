import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Piloto } from './piloto-interface/piloto.interface';

@Injectable({
  providedIn: 'root'
})
export class PilotoServiceService {
  constructor() { }
  url = environment.url
  http = inject(HttpClient)

  getPilotos(): Observable<Piloto[]> {
    return this.http.get<Piloto[]>(this.url)
  }

  getPilotoById(id: string | null | undefined): Observable<Piloto> {
    return this.http.get<Piloto>(`${this.url}/${id}`)
  }

  postPiloto(piloto: Piloto): Observable<Piloto> {
    return this.http.post<Piloto>(this.url, piloto)
  }

  deletePiloto(id: string | null | undefined): Observable<null> {
    return this.http.delete<null>(`${this.url}/${id}`)
  }

  putPiloto(id: string | null | undefined, piloto: Piloto): Observable<Piloto> {
    return this.http.put<Piloto>(`${this.url}/${id}`, piloto)
  }

}
