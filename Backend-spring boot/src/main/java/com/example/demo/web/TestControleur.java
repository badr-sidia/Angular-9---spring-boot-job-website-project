package com.example.demo.web;

import com.example.demo.dao.TestRepository;
import com.example.demo.entities.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/test")
public class TestControleur {
    @Autowired
    private TestRepository testRepository;

    @PostMapping("/ajouter")
    public Test ajouterTest(@RequestBody Test test) {
        return testRepository.save(test);
    }

    @GetMapping("/all")
    public List<Test> getall() {
        return testRepository.findAll();
    }

    @PutMapping("/update/{id}")
    public Test updateTest(@RequestBody Test test, @PathVariable Long id) {
        test.setId(id);
        return testRepository.saveAndFlush(test);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap<String, String> deleteTest(@PathVariable Long id) {
        HashMap<String, String> hashMap = new HashMap<>();
        try {
            testRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;
    }
    @GetMapping("/getprofil/{id}")
    public Test getbyId(@PathVariable Long id) {

        return testRepository.getOne(id);
    }
}
