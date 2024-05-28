import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService{
  static rutaPaises = 'https://restcountries.com/v2/all'

  constructor(private http: HttpClient) { }

  traerPaises(): Observable<any>
  {
    return this.http.get(PaisesService.rutaPaises);
  }
}