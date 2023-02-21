import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY = 'db0e243ba76868c24fa0fb81104503c9';

  constructor(private http: HttpClient) {}

  getWeatherFromCity(city: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=${this.API_KEY}`
    );
  }
}
