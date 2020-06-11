package com.example.demo.dao;

import com.example.demo.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    @Query("select e from Admin e where e.login= :login and e.password= :password")
    Admin login(@Param("login") String login, @Param("password") String password);
}
