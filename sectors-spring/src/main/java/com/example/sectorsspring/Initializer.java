package com.example.sectorsspring;

import com.example.sectorsspring.module.sector.Sector;
import com.example.sectorsspring.module.sector.SectorRepository;
import com.example.sectorsspring.module.user.User;
import com.example.sectorsspring.module.user.UserRepository;
import com.example.sectorsspring.module.user.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class Initializer implements CommandLineRunner {

    private final SectorRepository sectorRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {

        /* Did not add all the values from the index.html as it seemed unnecessary.  */

        Sector other = new Sector("Other", 3);
        Sector service = new Sector("Service", 227);
        Sector manufacturing = new Sector("Manufacturing", 1);
        Sector constructionMaterials = new Sector("Construction Materials", 19, manufacturing);
        Sector electronicsAndOptics = new Sector("Electronics and Optics", 18, manufacturing);
        Sector foodAndBeverage = new Sector("Food and Beverage", 6,  manufacturing);
        Sector printing = new Sector("Printing", 5, manufacturing);
        Sector wood = new Sector("Wood", 8, manufacturing);

        manufacturing.addChild(constructionMaterials);
        manufacturing.addChild(electronicsAndOptics);
        manufacturing.addChild(foodAndBeverage);
        manufacturing.addChild(printing);
        manufacturing.addChild(wood);

        Sector bakeryAndConfectionery = new Sector("Bakery & confectionery products", 342, foodAndBeverage);
        Sector beverages = new Sector("Beverages", 43, foodAndBeverage);
        foodAndBeverage.addChild(bakeryAndConfectionery);
        foodAndBeverage.addChild(beverages);

        sectorRepository.save(manufacturing);
        sectorRepository.save(other);
        sectorRepository.save(service);

        List<Sector> testUserSector = new ArrayList<>();
        testUserSector.add(manufacturing);
        testUserSector.add(printing);
        testUserSector.add(wood);

        User testUser = User.builder()
                .name("Mari Maasikas")
                .username("test")
                .password(passwordEncoder.encode("test"))
                .sectors(testUserSector)
                .role(UserRole.USER)
                .build();

        userRepository.save(testUser);
    }
}
