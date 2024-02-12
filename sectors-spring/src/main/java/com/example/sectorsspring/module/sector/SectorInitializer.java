package com.example.sectorsspring.module.sector;

import com.example.sectorsspring.module.user.User;
import com.example.sectorsspring.module.user.UserRepository;
import com.example.sectorsspring.module.user.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class SectorInitializer implements CommandLineRunner {

    private final SectorRepository sectorRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        /*Manufacturing with children*/
        Sector manufacturing = new Sector("Manufacturing", 1);
        Sector constructionMaterials = new Sector("Construction Materials", 19, manufacturing);
        Sector electronicsAndOptics = new Sector("Electronics and Optics", 18, manufacturing);
        Sector foodAndBeverage = new Sector("Food and Beverage", 6,  manufacturing);
        Sector furniture = new Sector("Furniture", 342, manufacturing);
        Sector machinery = new Sector("Machinery", 12,  manufacturing);
        Sector metalWorking = new Sector("Metalworking", 11, manufacturing);
        Sector plasticAndRubber = new Sector("Plastic and Rubber", 9, manufacturing);
        Sector printing = new Sector("Printing", 5, manufacturing);
        Sector textileAndClothing = new Sector("Textile and Clothing", 7, manufacturing);
        Sector wood = new Sector("Wood", 8, manufacturing);

        manufacturing.addChild(constructionMaterials);
        manufacturing.addChild(electronicsAndOptics);
        manufacturing.addChild(foodAndBeverage);
        manufacturing.addChild(furniture);
        manufacturing.addChild(machinery);
        manufacturing.addChild(metalWorking);
        manufacturing.addChild(plasticAndRubber);
        manufacturing.addChild(printing);
        manufacturing.addChild(textileAndClothing);
        manufacturing.addChild(wood);

        /*Food and Beverage children*/
        Sector bakeryAndConfectionery = new Sector("Bakery & confectionery products", 342, foodAndBeverage);
        Sector beverages = new Sector("Beverages", 43, foodAndBeverage);
        foodAndBeverage.addChild(bakeryAndConfectionery);
        foodAndBeverage.addChild(beverages);

        sectorRepository.save(manufacturing);

        Sector other = new Sector("Other", 3);

        Sector service = new Sector("Service", 227);

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
