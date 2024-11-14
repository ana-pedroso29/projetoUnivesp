package com.Java.AmaPatas.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "Animais")
public class Animal extends EntidadeDominio{
    @Column
    private String nome;

    @Column
    private int idade;

    @Column
    private String raca;

    @Column
    private String genero;

    @Column
    private String porte;

    @ManyToOne
    @JoinColumn(name= "doador_id")
    private Doador doador;

    public Animal(String nome, int idade, String raca, String genero, String porte, Doador doador) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
        this.genero = genero;
        this.porte = porte;
        this.doador = doador;
    }

    public Animal(){

    }

    public String getNome() {return nome;}

    public void setNome(String nome) {this.nome = nome;}

    public int getIdade() {return idade;}

    public void setIdade(int idade) {this.idade = idade;}

    public String getRaca() {return raca;}

    public void setRaca(String raca) {this.raca = raca;}

    public String getGenero() {return genero;}

    public void setGenero(String genero) {this.genero = genero;}

    public String getPorte() {return porte;}

    public void setPorte(String porte) {this.porte = porte;}

    public Doador getDoador() {
        return doador;
    }

    public void setDoador(Doador doador) {
        this.doador = doador;
    }
}
