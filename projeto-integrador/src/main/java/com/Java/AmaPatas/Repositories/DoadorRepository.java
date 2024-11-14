package com.Java.AmaPatas.Repositories;

import com.Java.AmaPatas.Models.Doador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DoadorRepository extends JpaRepository<Doador, Long> {
    @Query("SELECT a FROM Doador a WHERE a.nome LIKE %:filter% OR a.endereco LIKE %:filter% OR a.telefone LIKE %:filter% OR a.cpf LIKE %:filter%")
    List<Doador> findAllByNomeContainingOrEnderecoContainingOrTelefoneContainingOrCpfContaining(String filter);
}
