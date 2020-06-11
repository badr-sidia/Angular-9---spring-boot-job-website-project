package com.example.demo.entities;

import javax.persistence.*;

@Entity
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String duree;
    private String localisation;
    private String societe;
    private String description;

    @ManyToOne
    @JoinColumn(name="rec_id")
    private Recruteur r;


    public Recruteur getR() {
        return r;
    }

    public void setR(Recruteur r) {
        this.r = r;
    }

    public Offre() {
    }

    public Offre(Long id, String title, String duree, String localisation, String description, String societe) {
        this.id = id;
        this.title = title;
        this.duree = duree;
        this.localisation = localisation;
        this.description = description;
        this.societe = societe;
    }



    public String getDuree() {
        return duree;
    }

    public String getLocalisation() {
        return localisation;
    }

    public String getTitle() {
        return title;
    }

    public String getSociete() {
        return societe;
    }

    public String getDescription() {
        return description;
    }

    public void setDuree(String duree) {
        this.duree = duree;
    }

    public void setLocalisation(String localisation) {
        this.localisation = localisation;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setSociete(String societe) {
        this.societe = societe;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
