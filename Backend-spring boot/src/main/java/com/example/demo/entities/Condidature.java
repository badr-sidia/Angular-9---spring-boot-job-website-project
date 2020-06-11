package com.example.demo.entities;

import javax.persistence.*;

@Entity
public class Condidature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String date;
    @ManyToOne
    private Condidat condidat;
    @ManyToOne
    private Offre offre;

    public Condidature(String date, Condidat condidat, Offre offre) {
        this.date = date;
        this.condidat = condidat;
        this.offre = offre;
    }

    public Condidature() {
    }

    public Long getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public Condidat getCondidat() {
        return condidat;
    }

    public Offre getOffre() {
        return offre;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setCondidat(Condidat condidat) {
        this.condidat = condidat;
    }

    public void setOffre(Offre offre) {
        this.offre = offre;
    }
}
