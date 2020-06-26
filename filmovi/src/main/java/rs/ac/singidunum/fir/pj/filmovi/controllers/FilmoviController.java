package rs.ac.singidunum.fir.pj.filmovi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rs.ac.singidunum.fir.pj.filmovi.entities.Film;
import rs.ac.singidunum.fir.pj.filmovi.entities.Glumac;
import rs.ac.singidunum.fir.pj.filmovi.repositories.FilmoviRepository;

@CrossOrigin(origins= "https://happy-joliot-1eca56.netlify.app", maxAge=3600)
@RestController
public class FilmoviController {

	@Autowired
	private FilmoviRepository repository;
	
	@GetMapping("/filmovi")
	public List<Film> getAllFilmovi() {
		return (List<Film>)repository.findAll();
	}
	
	@GetMapping("/filmovi/{id}")
	public Film getFilm(@PathVariable int id) {
		return repository.findById(id).orElse(null);
	}
	
	@PostMapping("/filmovi")
	public Film addFilm(@ModelAttribute Film filmovi) {
		return repository.save(filmovi);
	}
	
	@DeleteMapping("/filmovi/{id}") 
	public void deleteFilm(@PathVariable int id) {
		repository.deleteById(id);
	}
	
	@PutMapping("/filmovi/{id}")
	public Film updateFilm(@PathVariable int id, @RequestBody Film filmovi) {
		return repository.save(filmovi);
	}
	
	@GetMapping("/glumci/film")
	public List<Film> getAllFilmoviByGlumac(@RequestBody Glumac glumac) {
		return repository.findAllFilmoviByGlumci(glumac);
	}
	
	
	@GetMapping("/filmovi/search/{genre}")
	public List<Film> getFilmoviByGenre(@PathVariable String genre) {
		return repository.findAllByGenre(genre);
	}
	
	@GetMapping("/filmovi/sort/asc")
	public List<Film> getAllFilmoviByAsc() {
		return (List<Film>)repository.findByOrderByRatingAsc();
	}
	
	@GetMapping("/filmovi/sort/desc")
	public List<Film> getAllFilmoviByDesc() {
		return (List<Film>)repository.findByOrderByRatingDesc();
	}
	
	@GetMapping("/filmovi/count")
	public long getNUmberOfFilmovi() {
		return repository.count();
	}
	
	
}
