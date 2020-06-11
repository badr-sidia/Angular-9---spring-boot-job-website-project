package com.example.demo.web;


import com.example.demo.dao.CondidatRepository;
import com.example.demo.dao.CvRepository;
import com.example.demo.dao.OffreRepository;
import com.example.demo.entities.Condidat;
import com.example.demo.entities.Cv;
import com.example.demo.entities.Offre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/cv")
public class CvControleur {
    @Autowired
    private CvRepository cvRepository;
    @Autowired
    private CondidatRepository condidatRepository;
    @Autowired
    private OffreRepository offreRepository;
    @PostMapping("/ajouter/{id}/{ido}")
    public Cv ajouterCv(@RequestBody Cv cv, @PathVariable Long id,@PathVariable Long ido) {
        Condidat condidat=condidatRepository.getOne(id );
        cv.setCondidat(condidat);
        Offre offre=offreRepository.getOne(ido);
        cv.setOffre(offre);
        return cvRepository.saveAndFlush(cv);
    }

    @GetMapping("/all")
    public List<Cv> getall() {
        return cvRepository.findAll();
    }

    @GetMapping("/all/{ido}")
    public List<Cv> getall(@PathVariable Long ido) {

        return cvRepository.findByOffre_id(ido);
    }
    @PutMapping("/update/{id}/{idc}")
    public Cv updateCv(@RequestBody Cv cv, @PathVariable Long id,@PathVariable Long idc) {
       Condidat condidat=condidatRepository.getOne(idc);
        cv.setId(id);
        cv.setCondidat(condidat);
        return cvRepository.saveAndFlush(cv);
    }
    @DeleteMapping("/delete")
    public HashMap<String, String> deleteCv(@PathVariable Long id) {
        HashMap<String, String> hashMap = new HashMap<>();
        try {
            cvRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;

    }

    @GetMapping("/getprofil/{id}")
    public Cv getbyId(@PathVariable Long id) {

        return cvRepository.getOne(id);
    }

}
