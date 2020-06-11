package com.example.demo.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String questions;
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Condidat> condidats=new ArrayList<>();
    public Test() {
    }

    public Collection<Condidat> getCondidats() {
        return condidats;
    }

    public void setCondidats(Collection<Condidat> condidats) {
        this.condidats = condidats;
    }

    public Test(Long id, String questions) {
        this.id = id;
        this.questions = questions;
    }

    public String getQuestions() {
        return questions;
    }

    public void setQuestions(String questions) {
        this.questions = questions;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
