package fr.ajc.myWeatherSpring.controllers;

import java.util.List;

import fr.ajc.myWeatherSpring.models.WorldCity;
import fr.ajc.myWeatherSpring.services.WorldCityService;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/city")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
public class WorldCityController {
	
private final WorldCityService worldCityService;
	
	@GetMapping("/all")
	public List<WorldCity> getCities() {
		return worldCityService.getCities();
	}
	
	@PostMapping("/add")
	public WorldCity addCity(@RequestBody WorldCity city) {
		System.out.println("Données reçues : " + city);
		return worldCityService.addCity(city);
	}
}
