package com.example.sectorsspring.module.sector;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SectorRepository extends JpaRepository<Sector, Long> {
    Sector findByValue(int value);
}
