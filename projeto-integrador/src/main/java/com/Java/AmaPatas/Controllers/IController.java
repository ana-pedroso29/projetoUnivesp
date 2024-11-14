package com.Java.AmaPatas.Controllers;

import org.springframework.http.ResponseEntity;

public interface IController<T> {
    ResponseEntity<?> findAll();
    ResponseEntity<?> findById(long id);
    ResponseEntity<?> save(T t);
    ResponseEntity<?> update(T t);
    ResponseEntity<?> find(String filter);
    ResponseEntity<?> deleteById(long id);
}
