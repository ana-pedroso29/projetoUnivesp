package com.Java.AmaPatas.Database;

import java.util.List;
import java.util.Optional;

public interface IDao<T>{
    List<T> findAll();
    Optional<T> findById(long id);
    void save(T t);
    void update(T t);
    List<T> find(String filter);
    void deleteById(long id);
}
