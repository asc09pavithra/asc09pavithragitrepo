package com.example.hotelmanagementsystem.repository;


import com.example.hotelmanagementsystem.entity.bookings_entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface bookings_repository extends JpaRepository<bookings_entity, String> {
    bookings_entity findTopByOrderByIdDesc();
}
