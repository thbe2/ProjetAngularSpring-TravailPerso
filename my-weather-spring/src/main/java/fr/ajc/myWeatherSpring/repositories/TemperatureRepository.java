package fr.ajc.myWeatherSpring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.ajc.myWeatherSpring.models.Temperature;

public interface TemperatureRepository extends JpaRepository<Temperature, Long> {

}
