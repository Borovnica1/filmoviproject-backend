package rs.ac.singidunum.fir.pj.filmovi.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import rs.ac.singidunum.fir.pj.filmovi.entities.Film;
import rs.ac.singidunum.fir.pj.filmovi.entities.Glumac;

public interface FilmoviRepository extends CrudRepository<Film, Integer>{

	/*public List<Film> findAllByOrderByRatingAsc(float rating);*/
	
	List<Film> findByOrderByRatingAsc();
	List<Film> findByOrderByRatingDesc();
	
	List<Film> findAllByGenre (String genre);
	
	List<Film> findAllFilmoviByGlumci (Glumac glumac);

}
