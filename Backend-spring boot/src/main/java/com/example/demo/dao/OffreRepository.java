package com.example.demo.dao;

import com.example.demo.entities.Cv;
import com.example.demo.entities.Offre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OffreRepository extends JpaRepository<Offre,Long> {
    public List<Offre> findByR_id(Long id);
    @Query("select o from Offre o where o.duree= :duree and o.localisation= :localisation and o.title= :title")
    public List<Offre> getbyfilter(@Param("localisation")String localisation,@Param("duree") String duree,@Param("title") String title);
}
