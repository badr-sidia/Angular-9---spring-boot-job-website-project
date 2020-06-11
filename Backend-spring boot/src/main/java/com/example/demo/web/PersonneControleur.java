package com.example.demo.web;

import com.example.demo.dao.PersonneRepository;
import com.example.demo.entities.Personne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/personne")
public class PersonneControleur {
    @Autowired
    private PersonneRepository personneRepository;

    @PostMapping("/ajouter")
    public Personne ajouterPersonne(@RequestBody Personne personne) {
        return personneRepository.save(personne);
    }

    @GetMapping("/all")
    public List<Personne> getall() {
        return personneRepository.findAll();
    }

    @PutMapping("/update/{id}")
    public Personne updatePersonne(@RequestBody Personne personne, @PathVariable Long id) {
        personne.setId(id);
        return personneRepository.saveAndFlush(personne);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap<String, String> deletePersonne(@PathVariable Long id) {
        HashMap<String, String> hashMap = new HashMap<>();
        try {
            personneRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;

    }
    @GetMapping("/getprofil/{id}")
    public Personne getbyId(@PathVariable Long id) {

        return personneRepository.getOne(id);
    }
}
