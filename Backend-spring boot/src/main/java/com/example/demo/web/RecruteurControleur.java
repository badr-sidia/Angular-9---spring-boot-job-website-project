package com.example.demo.web;

import com.example.demo.dao.RecruteurRepository;
import com.example.demo.entities.Recruteur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/recruteur")
public class RecruteurControleur  {
    @Autowired
    private RecruteurRepository recruteurRepository;

    @PostMapping("/ajouter")
    public Recruteur ajouterRecruteur(@RequestBody Recruteur recruteur) {
        return recruteurRepository.save(recruteur);
    }

    @GetMapping("/all")
    public List<Recruteur> getall() {
        return recruteurRepository.findAll();
    }

    @PutMapping("/update/{id}")
    public Recruteur updaterecruteur(@RequestBody Recruteur recruteur , @PathVariable Long id){
        recruteur.setId(id);
        return recruteurRepository.saveAndFlush(recruteur);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap<String, String> deleteRecruteur(@PathVariable Long id) {
        HashMap<String, String> hashMap = new HashMap<>();
        try {
            recruteurRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;

    }
    @GetMapping("/getprofil/{id}")
    public Recruteur getbyId(@PathVariable Long id) {

        return recruteurRepository.getOne(id);
    }
    @PostMapping("/connexion")
    public Recruteur login(@RequestBody Recruteur recruteur) {
        return recruteurRepository.login(recruteur.getLogin(), recruteur.getPassword());
    }
}
