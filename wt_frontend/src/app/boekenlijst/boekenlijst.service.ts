import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boek } from './boek';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class boekService {
  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient){}

  public getBoeken(): Observable<any> {
    return this.http.get<Boek[]>(`${this.apiServerUrl}/boek/boekenlijst`);
  }

  public addBoek(Boek: Boek): Observable<Boek> {
    return this.http.post<Boek>(`${this.apiServerUrl}/boek/add`, Boek);
  }

  public updateBoek(Boek: Boek): Observable<Boek> {
    return this.http.put<Boek>(`${this.apiServerUrl}/boek/update`, Boek);
  }

  public deleteBoek(BoekId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/boek/delete/${BoekId}`);
  }
}