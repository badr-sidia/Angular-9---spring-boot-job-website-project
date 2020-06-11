package com.example.demo.dao;

import com.example.demo.entities.Condidat;
import com.example.demo.entities.Offre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CondidatRepository extends JpaRepository<Condidat,Long> {
    @Query("select e from Condidat e where e.login= :login and e.password= :password")
    Condidat login(@Param("login") String login, @Param("password") String password);

    @Query("select o from Condidat o where o.nom= :nom and o.formation= :formation")
    public List<Condidat> getbyfilter(@Param("nom")String nom, @Param("formation") String formation);
}
