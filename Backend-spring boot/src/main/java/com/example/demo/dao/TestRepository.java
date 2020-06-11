package com.example.demo.dao;

import com.example.demo.entities.Offre;
import com.example.demo.entities.Recruteur;
import com.example.demo.entities.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TestRepository extends JpaRepository<Test,Long> {

}
