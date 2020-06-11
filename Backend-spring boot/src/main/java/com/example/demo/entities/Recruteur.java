package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class Recruteur extends Personne {
    private String domaine;
    private Long nbrsalarie;
    private String description;
    private String siteweb;
    private String email;

    @OneToMany(mappedBy = "r")
    @JsonIgnore
    private Collection<Offre> offres=new ArrayList<>();

    public String getDomaine() {
        return domaine;
    }

    public void setDomaine(String domaine) {
        this.domaine = domaine;
    }

    public Long getNbrSalarie() {
        return nbrsalarie;
    }

    public void setNbrSalarie(Long nbrSalarie) {
        this.nbrsalarie = nbrSalarie;
    }

    public String getDescription() {
        return description;
    }

    public Long getNbrsalarie() {
        return nbrsalarie;
    }

    public void setNbrsalarie(Long nbrsalarie) {
        this.nbrsalarie = nbrsalarie;
    }

    public void setSiteweb(String siteweb) {
        this.siteweb = siteweb;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSiteweb() {
        return siteweb;
    }

    public String getEmail() {
        return email;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSiteWeb() {
        return siteweb;
    }

    public void setSiteWeb(String siteWeb) {
        this.siteweb = siteWeb;
    }

    public Collection<Offre> getOffres() {
        return offres;
    }

    public void setOffres(Collection<Offre> offres) {
        this.offres = offres;
    }

    public Recruteur() {
    }

    public Recruteur(Long id, String nom, String prenom, String login, String password, String domaine, Long nbrSalarie, String description, String siteWeb,String email) {
        super(id, nom, prenom, login, password);
        this.domaine = domaine;
        this.nbrsalarie = nbrSalarie;
        this.description = description;
        this.siteweb = siteWeb;
        this.email=email; }

}
