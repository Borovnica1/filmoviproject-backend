package rs.ac.singidunum.fir.pj.filmovi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rs.ac.singidunum.fir.pj.filmovi.entities.Film;
import rs.ac.singidunum.fir.pj.filmovi.entities.Glumac;
import rs.ac.singidunum.fir.pj.filmovi.repositories.GlumciRepository;

@CrossOrigin(origins = "*")
@RestController
public class GlumciController {

	
	@Autowired
	private GlumciRepository repository;
	
	@GetMapping("/glumci")
	public List<Glumac> getAllGlumci() {
		return (List<Glumac>)repository.findAll();
	}
	
	@GetMapping("/glumci/{id}")
	public Glumac getGlumac(@PathVariable int id) {
		return repository.findById(id).orElse(null);
	}
	
	@PostMapping("/glumci")
	public Glumac addGlumac(@RequestBody Glumac glumci) {
		return repository.save(glumci);
	}
	
	@DeleteMapping("/glumci/{id}") 
	public void deleteGlumac(@PathVariable int id) {
		repository.deleteById(id);
	}
	
	@PutMapping("/glumci/{id}")
	public Glumac updateGlumac(@PathVariable int id, @RequestBody Glumac glumci) {
		return repository.save(glumci);
	}
	
	@GetMapping("/filmovi/glumac")
	public List<Glumac> findAllGlumciByFilm(@RequestBody Film film) {
		return repository.findAllGlumciByFilmovi(film);
	}
	
	@GetMapping("/glumci/count")
	public long getNumberOfGlumci() {
		return repository.count();
	}
	
	
}
