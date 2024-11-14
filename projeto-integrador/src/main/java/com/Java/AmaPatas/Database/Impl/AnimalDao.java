package com.Java.AmaPatas.Database.Impl;

import com.Java.AmaPatas.Database.IDao;
import com.Java.AmaPatas.Models.Animal;
import com.Java.AmaPatas.Repositories.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnimalDao implements IDao<Animal> {

    @Autowired
    private AnimalRepository repository;

    @Override
    public List<Animal> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Animal> findById(long id) {
        return repository.findById(id);
    }

    @Override
    public void save(Animal animal) {
        repository.save(animal);
    }

    @Override
    public void update(Animal animal) {
        repository.save(animal);
    }

    @Override
    public List<Animal> find(String filter) {
        return repository.findAllByNomeContainingOrIdadeEqualsOrGeneroContainingOrRacaContainingOrPorteContaining(filter);
    }

    @Override
    public void deleteById(long id) {
        repository.deleteById(id);
    }
}
