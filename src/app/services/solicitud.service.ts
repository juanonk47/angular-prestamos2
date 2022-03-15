import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Solicitud } from '../models/Solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private apiUrl = `${environment.API}solicitud`

  constructor(private http: HttpClient){
  }

  public create_new_solicitud(solicitud: any): Observable<Solicitud>{
    return this.http.post<Solicitud>(`${this.apiUrl}`,solicitud).pipe(retry(3));
  }

  public pay_solicitud(id_solicitud: string): Observable<Solicitud>{
    return this.http.put<Solicitud>(`${this.apiUrl}/pay/${id_solicitud}`,null).pipe(retry(3));
  }


}
