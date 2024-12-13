package com.example.hotelmanagementsystem.repository;

import com.example.hotelmanagementsystem.entity.reviews_entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface reviews_repository extends JpaRepository<reviews_entity, String> {
    reviews_entity findTopByOrderByIdDesc();
}