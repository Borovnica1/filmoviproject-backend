package rs.ac.singidunum.fir.pj.filmovi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rs.ac.singidunum.fir.pj.filmovi.entities.Film;
import rs.ac.singidunum.fir.pj.filmovi.entities.Glumac;
import rs.ac.singidunum.fir.pj.filmovi.repositories.FilmoviRepository;

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
	public Film addFilm(@RequestBody Film filmovi) {
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
	
	
	
	
	
}
