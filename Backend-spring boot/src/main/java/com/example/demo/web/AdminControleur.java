package com.example.demo.web;

import com.example.demo.dao.AdminRepository;
import com.example.demo.entities.Admin;
import com.example.demo.entities.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class AdminControleur {
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private MailService mailService;

    @PostMapping("/ajouter")
    public Admin ajouterAdmin(@RequestBody Admin admin) {
        return adminRepository.save(admin);
    }

    @GetMapping("/all")
    public List<Admin> getall() {
        return adminRepository.findAll();
    }

    @PutMapping("/update/{id}")
    public Admin updateAdmin(@RequestBody Admin admin, @PathVariable Long id) {
        admin.setId(id);
        return adminRepository.saveAndFlush(admin);
    }
    @DeleteMapping("/delete/{id}")
    public HashMap<String, String> deleteAdmin(@PathVariable Long id) {
        HashMap<String, String> hashMap = new HashMap<>();
        try {
            adminRepository.deleteById(id);
            hashMap.put("state", "yes");
        } catch (Exception e) {
            hashMap.put("state", "no");
        }
        return hashMap;
    }

    @GetMapping("/getprofil{id}")
    public Admin getbyId(@PathVariable Long id) {

        return adminRepository.getOne(id);
    }

    @PostMapping("/connexion")
    public Admin login(@RequestBody Admin admin) {
        return adminRepository.login(admin.getLogin(), admin.getPassword());
    }
  @PostMapping("/sendmail")
    public String sendMail(@RequestBody Mail mail){
        System.out.println(mail);

        mail.setFrom("badr-443@live.com");
        mail.setTo(mail.getTo());
        mail.setSubject(mail.getSubject());
        mail.setContent(mail.getContent());

        mailService.sendSimpleMessage(mail);
        return "ok";}
}