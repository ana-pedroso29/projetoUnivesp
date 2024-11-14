package com.Java.AmaPatas.Controllers.Impl;

import com.Java.AmaPatas.Controllers.IController;
import com.Java.AmaPatas.Models.Animal;
import com.Java.AmaPatas.Models.Doador;
import com.Java.AmaPatas.Repositories.AnimalRepository;
import com.Java.AmaPatas.Services.Impl.AnimalFachada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/Animal")
@Component
public class AnimalController implements IController<Animal> {

    @Autowired
    AnimalFachada fachada;

    @Override
    @GetMapping(value = "/findAll")
    public ResponseEntity<?> findAll() {
        try {
            return new ResponseEntity<>(fachada.findAll(), HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    @GetMapping(value = "/findById")
    public ResponseEntity<?> findById(@RequestParam long id) {
        try {
            return new ResponseEntity<>(fachada.findById(id),HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    @PostMapping(value = "/save")
    public ResponseEntity<?> save(@RequestBody Animal animal) {
        try {
            fachada.save(animal);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    @PutMapping(value = "/update")
    public ResponseEntity<?> update(@RequestBody Animal animal) {
        try {
            fachada.update(animal);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    @GetMapping(value = "/find")
    public ResponseEntity<?> find(@RequestParam String filter) {
        try {
            return new ResponseEntity<>(fachada.find(filter), HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    @DeleteMapping(value = "/delete")
    public ResponseEntity<?> deleteById(@RequestParam long id) {
        try {
            fachada.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
