package com.example.demo.entities;

import javax.persistence.Entity;

@Entity
public class Admin extends Personne{

    public Admin(Long id, String nom, String prenom, String login, String password) {
        super(id, nom, prenom, login, password);
    }

    public Admin() {
    }

}
