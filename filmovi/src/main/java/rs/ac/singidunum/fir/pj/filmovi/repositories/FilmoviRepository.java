package rs.ac.singidunum.fir.pj.filmovi.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import rs.ac.singidunum.fir.pj.filmovi.entities.Film;
import rs.ac.singidunum.fir.pj.filmovi.entities.Glumac;

public interface FilmoviRepository extends CrudRepository<Film, Integer>{

	List<Film> findAllFilmoviByGlumci (Glumac glumac);
}
