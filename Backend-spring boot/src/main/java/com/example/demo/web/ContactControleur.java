package com.example.demo.web;

import com.example.demo.dao.CondidatRepository;
import com.example.demo.dao.ContactRepository;
import com.example.demo.entities.Condidat;
import com.example.demo.entities.Contact;
import com.example.demo.entities.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/Contact")
public class ContactControleur {
    @Autowired
    private MailService mailservice;
    @Autowired
    private ContactRepository contactRepository;
    @Autowired
    private CondidatRepository condidatRepository;
    @PostMapping("/ajouter/{id}")
    public Contact ajouterContact(@RequestBody Contact contact,@PathVariable Long id) {
        Condidat condidat=condidatRepository.getOne(id);
        contact.setC(condidat);
        return contactRepository.save(contact);
    }

    @GetMapping("/all")
    public List<Contact> getall() {
        return contactRepository.findAll();
    }

    @PutMapping("/update/{idc}/{idco}")
    public Contact updateContact(@RequestBody Contact contact, @PathVariable Long idc , @PathVariable Long idco) {
        Condidat condidat=condidatRepository.getOne(idco);
        contact.setId(idc);
        contact.setC(condidat);

        return contactRepository.saveAndFlush(contact);
    }



    @DeleteMapping("/delete/{id}")
    public HashMap<String, String> deleteContact(@PathVariable Long id) {
        HashMap<String, String> hashMap = new HashMap<>();
        try {
            contactRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }

        return hashMap;

    }
    @GetMapping("/getprofil/{id}")
    public Contact getbyId(@PathVariable Long id) {

        return contactRepository.getOne(id);
    }

}
