package com.example.demo.dao;
import java.util.Optional;

import com.example.demo.entities.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ImageRepository extends JpaRepository<ImageModel, Long> {
    Optional<ImageModel> findByName(String name);
}
