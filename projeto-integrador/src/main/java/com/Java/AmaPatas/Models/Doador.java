package com.Java.AmaPatas.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Doadores")
public class Doador extends EntidadeDominio{
    @Column
    private String nome;

    @Column
    private String cpf;

    @Column
    private String telefone;

    @Column
    private String endereco;

    @OneToMany(mappedBy = "doador", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Animal> animais = new ArrayList<>();

    public Doador(String nome, String cpf, String telefone, String endereco, List<Animal> animais) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.endereco = endereco;
        this.animais = animais;
    }

    public Doador(){

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public List<Animal> getAnimais() {
        return animais;
    }

    public void setAnimais(List<Animal> animais) {
        this.animais = animais;
    }
}
