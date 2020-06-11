package com.example.demo.dao;


import com.example.demo.entities.Recruteur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RecruteurRepository extends JpaRepository<Recruteur,Long> {
    @Query("select e from Recruteur e where e.login= :login and e.password= :password")
    Recruteur login(@Param("login") String login, @Param("password") String password);
}
