package com.Java.AmaPatas.Services.Impl;

import com.Java.AmaPatas.Database.Impl.DoadorDao;
import com.Java.AmaPatas.Services.IFachada;
import com.Java.AmaPatas.Models.Doador;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class DoadorFachada implements IFachada<Doador> {

    @Autowired
    DoadorDao dao;

    @Override
    public List<Doador> findAll() {
        return dao.findAll() ;
    }

    @Override
    public Doador findById(long id) {
        return dao.findById(id).isPresent() ? dao.findById(id).get() : null;
    }

    @Override
    public void save(Doador doador) {
        dao.save(doador);
    }

    @Override
    public void update(Doador doador) {
        dao.update(doador);
    }

    @Override
    public List<Doador> find(String filter) {
        return dao.find(filter);
    }

    @Override
    public void deleteById(long id) {
        dao.deleteById(id);
    }
}
