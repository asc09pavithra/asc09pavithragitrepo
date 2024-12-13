package com.example.hotelmanagementsystem.repository;

import com.example.hotelmanagementsystem.entity.hotels_entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface hotels_repository extends JpaRepository<hotels_entity, String> {
    hotels_entity findTopByOrderByIdDesc();
}
