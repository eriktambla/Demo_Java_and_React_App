package com.example.sectorsspring.module.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    @Transactional
    @Modifying
    @Query("update User u set u.name = ?1, u.agreedToTerms = ?2 where u.id = ?3")
    void updateNameAndAgreedToTermsById(String name, Boolean agreedToTerms, Long id);
    boolean existsByUsername(String username);

    Optional<User> findByUsername(String username);
}
