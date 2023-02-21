package fr.ajc.myWeatherSpring.services;

import java.util.List;

import org.springframework.stereotype.Service;

import fr.ajc.myWeatherSpring.models.Temperature;
import fr.ajc.myWeatherSpring.repositories.TemperatureRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TemperatureService {

	private final TemperatureRepository temperatureRepository;

	public List<Temperature> getTemperatures() {
		return temperatureRepository.findAll();
	}
}
