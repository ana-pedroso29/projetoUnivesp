package com.Java.AmaPatas.Database.Impl;

import com.Java.AmaPatas.Database.IDao;
import com.Java.AmaPatas.Models.Doador;
import com.Java.AmaPatas.Repositories.DoadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoadorDao implements IDao<Doador> {

    @Autowired
    DoadorRepository repository;

    @Override
    public List<Doador> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Doador> findById(long id) {
        return repository.findById(id);
    }

    @Override
    public void save(Doador doador) {
        repository.save(doador);
    }

    @Override
    public void update(Doador doador) {
        repository.save(doador);
    }

    @Override
    public List<Doador> find(String filter) {
        return repository.findAllByNomeContainingOrEnderecoContainingOrTelefoneContainingOrCpfContaining(filter);
    }

    @Override
    public void deleteById(long id) {
        repository.deleteById(id);
    }
}
