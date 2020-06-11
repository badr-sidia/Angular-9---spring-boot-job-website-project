package com.example.demo.web;

import com.example.demo.dao.CondidatRepository;
import com.example.demo.entities.Condidat;
import com.example.demo.entities.Offre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/condidat")
public class CondidatControleur {
    @Autowired
    private CondidatRepository condidatRepository;

    @PostMapping("/ajouter")
    public Condidat ajouterCondidat(@RequestBody Condidat condidat) {
        return condidatRepository.save(condidat);
    }

    @GetMapping("/all")
    public List<Condidat> getall() {
        return condidatRepository.findAll();
    }

    @GetMapping("/allfilter/{nom}/{formation}")
    public List<Condidat> getfilter(@PathVariable String nom, @PathVariable String formation) {

        return condidatRepository.getbyfilter(nom,formation);
    }
    @PutMapping("/update/{id}")
    public Condidat updateCondidat(@RequestBody Condidat condidat, @PathVariable Long id) {
        condidat.setId(id);
        return condidatRepository.saveAndFlush(condidat);
    }
    @DeleteMapping("/delete")
    public HashMap<String, String> deleteCondidat(@PathVariable Long id) {
        HashMap<String, String> hashMap = new HashMap<>();
        try {
            condidatRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;

    }

    @GetMapping("/getprofil/{id}")
    public Condidat getbyId(@PathVariable Long id) {

        return condidatRepository.getOne(id);
    }
    @PostMapping("/connexion")
    public Condidat login(@RequestBody Condidat condidat) {
        return condidatRepository.login(condidat.getLogin(), condidat.getPassword());
    }
}

