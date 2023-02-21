package fr.ajc.myWeatherSpring.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "temperatures")
public class Temperature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Float feelsLike;
    private Float humidity;
    private Float pressure;
    private Float temp;
    private Float tempMax;
    private Float tempMin;
    
	public Temperature(Float feelsLike, Float humidity, Float pressure, Float temp, Float tempMax, Float tempMin) {
		this.feelsLike = feelsLike;
		this.humidity = humidity;
		this.pressure = pressure;
		this.temp = temp;
		this.tempMax = tempMax;
		this.tempMin = tempMin;
	}
}
