import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { environment } from 'src/environments/environment';
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = `${environment.API}`

  constructor(private http: HttpClient){

  }

  public isAuthenticated(): Boolean {
    const token = localStorage.getItem(`${environment.JWT_KEY}`);
    // return token? true: false
    return true;
  }

  public Login(usuario: Usuario){
    return this.http.get<String>(`${this.apiUrl}login`).pipe(
      retry(3)
    )
  }

}
