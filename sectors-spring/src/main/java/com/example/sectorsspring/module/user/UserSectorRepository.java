package com.example.sectorsspring.module.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UserSectorRepository extends JpaRepository<UserSector, Long> {
    @Query("select u.sector.id from UserSector u where u.user.id = ?1")
    List<Long> findByUserIdSectorIds(Long id);

    @Transactional
    @Modifying
    @Query("delete from UserSector u where u.user.id = ?1")
    void deleteByUserId(Long userId);


}