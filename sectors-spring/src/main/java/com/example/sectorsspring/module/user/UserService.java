package com.example.sectorsspring.module.user;

import com.example.sectorsspring.UserSectorRepository;
import com.example.sectorsspring.helpers.AuthenticationHelper;
import com.example.sectorsspring.module.sector.Sector;
import com.example.sectorsspring.module.sector.SectorDto;
import com.example.sectorsspring.module.sector.SectorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationHelper authHelper;
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

    public UserSectorsDto getUserWithSectors(Long userId){
        List<Long> usersSectorsIds = userSectorRepository.findByUserIdSectorIds(Long.valueOf(userId));
        List<Sector> sectors = sectorRepository.findAllById(usersSectorsIds);
        Optional<User> user = userRepository.findById(Long.valueOf(userId));

        if(user.isPresent()){
            return UserSectorsDto.builder()
                    .name(user.get().getName())
                    .agreedToTerms(user.get().getAgreedToTerms())
                    .sectors(sectors.stream().map(sector ->
                            SectorDto.builder()
                                    .id(sector.getId())
                                    .name(sector.getName())
                                    .build()
                    ).toList())
                    .build();
        }

        throw new NoSuchElementException("No value present");
    }

    public UserDto getUser(Long userId) {
        User authenticatedUser = authHelper.getAuthenticatedUserEntity();

        if (authenticatedUser == null || !Objects.equals(authenticatedUser.getId(), userId)) {
            throw new IllegalArgumentException();
        }

        return repository.findById(userId)
                .map(User::toDto)
                .orElseThrow(IllegalArgumentException::new);
    }
}
