import { Solicitud } from './../models/Solicitud';
import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/Usuario';
import { UserResetPass } from '../models/UsuarioResetPass';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = `${environment.API}usuario`

  constructor(private http: HttpClient){
  }

  public getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.apiUrl}`).pipe(retry(3));
  }

  public create_user(usuario: Usuario): Observable<any>{
    return this.http.post<Usuario>(`${this.apiUrl}`,usuario).pipe(retry(3))
  }

  public reset_password_user(usuario: UserResetPass): Observable<String> {
    return this.http.put<String>(`${this.apiUrl}/resetpassword`,usuario).pipe(retry(3));
  }

  public get_all_solicitud_user(userid: string): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${this.apiUrl}/saldo-disponible/${userid}`).pipe(retry(3));
  }
}
