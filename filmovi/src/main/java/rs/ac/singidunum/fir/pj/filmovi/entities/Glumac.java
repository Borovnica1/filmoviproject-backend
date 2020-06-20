package rs.ac.singidunum.fir.pj.filmovi.entities;


import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;


@Entity(name = "glumci")
public class Glumac {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int glumac_id;
	private String name;
	private String lastname;
	private int birthyear;
	private String nationality;
	
	@ManyToMany(mappedBy = "glumci")
	private Set<Film> filmovi;
	

	public Glumac() {
		
	}


	public Glumac(int glumac_id, String name, String lastname, int birthyear, String nationality) {
		this.glumac_id = glumac_id;
		this.name = name;
		this.lastname = lastname;
		this.birthyear = birthyear;
		this.nationality = nationality;
	}


	public int getGlumac_id() {
		return glumac_id;
	}


	public void setGlumac_id(int glumac_id) {
		this.glumac_id = glumac_id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public int getBirthyear() {
		return birthyear;
	}


	public void setBirthyear(int birthyear) {
		this.birthyear = birthyear;
	}


	public String getNationality() {
		return nationality;
	}


	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	
	
}
