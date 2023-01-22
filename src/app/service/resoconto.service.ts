import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resoconto } from '../model/Resoconto';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ResocontoService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getResoconti(): Observable<Resoconto[]> {
    return this.http.get<Resoconto[]>(`${this.apiServerUrl}/resoconto/all`);
  }
  public getResoconto(id: number): Observable<Resoconto> {
    return this.http.get<Resoconto>(`${this.apiServerUrl}/resoconto/find/` + id);
  }
  public addResoconto(resoconto: Resoconto): Observable<Resoconto> {
    return this.http.post<Resoconto>(`${this.apiServerUrl}/resoconto/add`, resoconto);
  }
  public updateResoconto(resoconto: Resoconto): Observable<Resoconto> {
    return this.http.put<Resoconto>(`${this.apiServerUrl}/resoconto/update`, resoconto);
  }
  public deleteResoconto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/resoconto/delete/${id}`);
  }
}
