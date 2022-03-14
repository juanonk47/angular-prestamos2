import { Calculadora } from './../models/Calculadora';
import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  private apiUrl = `${environment.API}`

  constructor(private http: HttpClient){
  }

  public getCalculadora(): Observable<Calculadora>{
    return this.http.get<Calculadora>(`${this.apiUrl}calculadora`).pipe(retry(3));
  }
}
