package com.Java.AmaPatas.Repositories;

import com.Java.AmaPatas.Models.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AnimalRepository extends JpaRepository<Animal, Long> {
    @Query("SELECT a FROM Animal a WHERE a.nome LIKE %:filter% OR a.genero LIKE %:filter% OR a.raca LIKE %:filter% OR a.porte LIKE %:filter%")
    List<Animal> findAllByNomeContainingOrIdadeEqualsOrGeneroContainingOrRacaContainingOrPorteContaining(String filter);
    
}
