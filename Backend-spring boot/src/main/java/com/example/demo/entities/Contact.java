package com.example.demo.entities;

import javax.persistence.*;

@Entity

public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String sujet;
private String description;
@ManyToOne
@JoinColumn(name="Condidat_id")
private Condidat c;
public Contact(Long id, String sujet, String description) {
    this.id = id;
    this.sujet = sujet;
    this.description = description;
}

public Contact() {
}

public Long getId() {
    return id;
}

public String getSujet() {
    return sujet;
}

public String getDescription() {
    return description;
}

public void setId(Long id) {

    this.id = id;
}

public void setSujet(String sujet) {
    this.sujet = sujet;
}

public void setDescription(String description) {
    this.description = description;
}

    public Condidat getC() {
        return c;
    }

    public void setC(Condidat c) {
        this.c = c;
    }
}
