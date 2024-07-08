import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pokemon`);
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`);
  }

  getTypes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/type`);
  }

  getTypeDetails(type: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/type/${type}`);
  }
}


