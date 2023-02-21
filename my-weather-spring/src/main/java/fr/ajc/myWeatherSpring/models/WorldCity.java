package fr.ajc.myWeatherSpring.models;

import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "worldcities")
public class WorldCity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String city;
	private String city_ascii;
	private Float lat;
	private Float lng;
	private String country;
	private String iso2;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Temperature> temperatures;

	public WorldCity(String city, String city_ascii, Float lat, Float lng, String country) {
		this.city = city;
		this.city_ascii = city_ascii;
		this.lat = lat;
		this.lng = lng;
		this.country = country;
	}

	public WorldCity(String city, Float lat, Float lng, String iso2) {
		this.city = city;
		this.lat = lat;
		this.lng = lng;
		this.iso2 = iso2;
	}

	public WorldCity(String city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "WorldCity [id=" + id + ", city=" + city + ", city_ascii=" + city_ascii + ", lat=" + lat + ", lng=" + lng
				+ ", country=" + country + ", iso2=" + iso2 + ", temperatures=" + temperatures + "]";
	}

}
