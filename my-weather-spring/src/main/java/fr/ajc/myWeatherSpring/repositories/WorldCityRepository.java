package fr.ajc.myWeatherSpring.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.ajc.myWeatherSpring.models.WorldCity;


public interface WorldCityRepository extends JpaRepository<WorldCity, Long> {

	Optional<WorldCity> findByCity(String name);

}
