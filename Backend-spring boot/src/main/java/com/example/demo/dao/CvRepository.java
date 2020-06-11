package com.example.demo.dao;

import com.example.demo.entities.Cv;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CvRepository extends JpaRepository<Cv,Long> {
    public List<Cv> findByOffre_id(Long id);
}
