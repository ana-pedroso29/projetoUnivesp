package com.Java.AmaPatas.Services.Impl;

import com.Java.AmaPatas.Database.Impl.AnimalDao;
import com.Java.AmaPatas.Models.Animal;
import com.Java.AmaPatas.Services.IFachada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class AnimalFachada implements IFachada<Animal> {

    @Autowired
    AnimalDao dao;

    @Override
    public List<Animal> findAll() {
        return dao.findAll();
    }

    @Override
    public Animal findById(long id) {
        return dao.findById(id).isPresent() ? dao.findById(id).get() : null;
    }

    @Override
    public void save(Animal animal) {
        dao.save(animal);
    }

    @Override
    public void update(Animal animal) {
        dao.update(animal);
    }

    @Override
    public List<Animal> find(String filter) {
        return dao.find(filter);
    }

    @Override
    public void deleteById(long id) {
        dao.deleteById(id);
    }
}
