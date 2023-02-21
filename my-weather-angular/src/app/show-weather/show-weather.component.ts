import { Component } from '@angular/core';
import { IpService } from '../ip.service';
import { MainTemperature } from '../mainTemperature';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent {
  private ip!: string;
  public city!: string;
  public main!: MainTemperature;
  public icon?: string;
  public description?: string;

  constructor(
    private weatherService: WeatherService,
    private ipService: IpService
  ) {}

  ngOnInit(): void {
    this.ipInit();
  }

  ipInit(): void {
    this.ipService.getIpAdress().subscribe({
      next: (data) => {
        this.ip = data.ip;
      },
      complete: () => this.cityInit(),
    });
  }

  cityInit(): void {
    this.ipService.getIpInfo(this.ip).subscribe({
      next: (info) => {
        this.city = info.city;
      },
      complete: () => this.getWeather(),
    });
  }

  getWeather(): void {
    this.weatherService.getWeatherFromCity(this.city).subscribe((data) => {
      const {
        feels_like: feelsLike,
        humidity,
        pressure,
        temp,
        temp_max: tempMax,
        temp_min: tempMin,
      } = data.main;

      this.main = {
        feelsLike,
        humidity,
        pressure,
        temp,
        tempMax,
        tempMin,
      };

      this.icon = data.weather[0].icon;
      this.description = data.weather[0].description;
    });
  }
}
