package com.example.sectorsspring.module.user;

import com.example.sectorsspring.module.sector.Sector;
import com.example.sectorsspring.module.sector.SectorDto;
import com.example.sectorsspring.module.sector.SectorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final UserSectorRepository userSectorRepository;
    private final SectorRepository sectorRepository;
    private final UserRepository userRepository;

    public void signup(UserSignupRequest request) {
        if (repository.existsByUsername(request.getUsername())) {
            throw new IllegalArgumentException();
        }
        repository.save(User.builder()
                .username(request.getUsername())
                .role(UserRole.USER)
                .password(passwordEncoder.encode(request.getPassword()))
                .build());
    }

    public UserSectorsDto getUserWithSectors(Long userId) {
        List<Long> usersSectorsIds = userSectorRepository.findByUserIdSectorIds(userId);
        List<Sector> sectors = sectorRepository.findAllById(usersSectorsIds);
        Optional<User> user = userRepository.findById(userId);

        if (user.isPresent()) {
            return UserSectorsDto.builder()
                    .name(user.get().getName())
                    .agreedToTerms(user.get().getAgreedToTerms())
                    .sectors(sectors.stream().map(sector ->
                            SectorDto.builder()
                                    .value(sector.getValue())
                                    .name(sector.getName())
                                    .build()
                    ).toList())
                    .build();
        }

        throw new NoSuchElementException("No value present");
    }

    public void updateUserWithSectors(Long userId, UserSectorsDto userWithSectors) {

        List<Sector> sectorsList = userWithSectors
                .getSectors()
                .stream()
                .map(sectorDto ->
                        sectorRepository.findByValue(sectorDto.getValue())
                ).toList();

        repository.updateNameAndAgreedToTermsById(userWithSectors.getName(), userWithSectors.getAgreedToTerms(), userId);
        userSectorRepository.deleteByUserId(userId);
        Optional<User> user = repository.findById(userId);


        sectorsList.forEach(sector ->
                userSectorRepository.save(UserSector.builder()
                        .sector(sector)
                        .user(user.orElseThrow())
                        .build())
        );


        ResponseEntity.ok("User updated");
    }
}
