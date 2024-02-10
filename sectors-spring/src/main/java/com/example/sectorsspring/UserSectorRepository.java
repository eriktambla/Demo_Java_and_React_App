package com.example.sectorsspring;

import com.example.sectorsspring.module.sector.Sector;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserSectorRepository extends JpaRepository<UserSector, Long> {
    @Query("select u.sector.id from UserSector u where u.user.id = ?1")
    List<Long> findByUserIdSectorIds(Long id);
}