package com.Java.AmaPatas.Models;

import jakarta.persistence.*;

@MappedSuperclass
public class EntidadeDominio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    public EntidadeDominio() {
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

}
