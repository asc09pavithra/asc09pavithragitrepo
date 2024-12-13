package com.example.hotelmanagementsystem.repository;

import com.example.hotelmanagementsystem.entity.guests_entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface guests_repository extends JpaRepository<guests_entity, String> {
    guests_entity findTopByOrderByIdDesc();
}
