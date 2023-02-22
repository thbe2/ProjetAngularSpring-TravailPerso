package fr.ajc.myWeatherSpring.services;

import java.util.List;

import org.springframework.stereotype.Service;

import fr.ajc.myWeatherSpring.models.WorldCity;
import fr.ajc.myWeatherSpring.repositories.WorldCityRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WorldCityService {

	private final WorldCityRepository worldCityRepository;
	
	public List<WorldCity> getCities() {
		return worldCityRepository.findAll();
	}

	public WorldCity addCity(WorldCity city) {
		System.out.println("Trying to add the following object into the database: "+ city);
		return worldCityRepository.save(city);
	}
}
