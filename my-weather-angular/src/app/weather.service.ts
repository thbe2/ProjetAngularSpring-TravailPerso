import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainTemperature } from './mainTemperature';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY = 'db0e243ba76868c24fa0fb81104503c9';
  private weatherUrl = 'http://localhost:8080/temp'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Envoie une requête GET à l'API openweather
  getWeatherFromCity(city: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=${this.API_KEY}`
    );
  }

  getTemperatures(): Observable<MainTemperature[]> {
    return this.http.get<MainTemperature[]>(this.weatherUrl + "/all").pipe(
      catchError(this.handleError<MainTemperature[]>('get temperatures', []))
    );
  }

}
