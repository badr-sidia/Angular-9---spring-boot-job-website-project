package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class Condidat extends Personne {
    private Long telephone;
    private String email;
    private String formation;
    private Integer experience;

    @OneToMany
    @JsonIgnore
    private Collection<Contact> contacts=new ArrayList<>();

    public Long getTelephone() {
        return telephone;
    }

    public String getEmail() {
        return email;
    }

    public String getFormation() {
        return formation;
    }

    public void setFormation(String formation) {
        this.formation = formation;
    }

    public Integer getExperience() {
        return experience;
    }

    public void setExperience(Integer experience) {
        this.experience = experience;
    }

    public void setTelephone(Long telephone) {
        this.telephone = telephone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Condidat(Long id, String nom, String prenom, String login, String password, Long telephone, String email, String formation, Integer experience, Collection<Contact> contacts) {
        super(id, nom, prenom, login, password);
        this.telephone = telephone;
        this.email = email;
        this.formation = formation;
        this.experience = experience;
        this.contacts = contacts;
    }

    public Condidat() {
    }

    public Collection<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(Collection<Contact> contacts) {
        this.contacts = contacts;
    }
}
