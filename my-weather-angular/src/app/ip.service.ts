import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IpInfo } from './ipInfo';
import { MainVille } from './mainVille';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private cityUrl = 'http://localhost:8080/city'
  private IP_INFO_TOKEN = 'dec4799a17057c';

  constructor(private http: HttpClient) { }

  getIpAdress(): Observable<any> {
    return this.http.get('http://api.ipify.org/?format=json');
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getIpInfo(ip: string): Observable<IpInfo> {
    return this.http.get<IpInfo>(
      `https://ipinfo.io/${ip}?token=${this.IP_INFO_TOKEN}`
    );
  }

  // Méthode pour retourner tts les villes dans la bdd 
  getCities(): Observable<MainVille[]> {
    return this.http.get<MainVille[]>(this.cityUrl + "/all").pipe(
      catchError(this.handleError<MainVille[]>('get cities', []))
    );
  }

  /** POST: add a new City to the server */
  addCity(data: MainVille): Observable<MainVille> {
    return this.http.post<MainVille>(this.cityUrl + "/add", data, this.httpOptions).pipe(
      catchError(this.handleError<MainVille>('add city'))
    );
  }
}