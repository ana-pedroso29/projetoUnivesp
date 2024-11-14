package com.Java.AmaPatas.Services;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IFachada<T> {
    List<T> findAll();
    T findById(long id);
    void save(T t);
    void update(T t);
    List<T> find(String filter);
    void deleteById(long id);
}
