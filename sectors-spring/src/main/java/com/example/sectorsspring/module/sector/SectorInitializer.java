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
        Sector manufacturing = new Sector("Manufacturing");
        Sector constructionMaterials = new Sector("Construction Materials", manufacturing);
        Sector electronicsAndOptics = new Sector("Electronics and Optics", manufacturing);
        Sector foodAndBeverage = new Sector("Food and Beverage", manufacturing);
        Sector furniture = new Sector("Furniture", manufacturing);
        Sector machinery = new Sector("Machinery", manufacturing);
        Sector metalWorking = new Sector("Metalworking", manufacturing);
        Sector plasticAndRubber = new Sector("Plastic and Rubber", manufacturing);
        Sector printing = new Sector("Printing", manufacturing);
        Sector textileAndClothing = new Sector("Textile and Clothing", manufacturing);
        Sector wood = new Sector("Wood", manufacturing);

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
        Sector bakeryAndConfectionery = new Sector("Bakery & confectionery products", foodAndBeverage);
        Sector beverages = new Sector("Beverages", foodAndBeverage);
        foodAndBeverage.addChild(bakeryAndConfectionery);
        foodAndBeverage.addChild(beverages);

        sectorRepository.save(manufacturing);

        Sector other = new Sector("Other");

        Sector service = new Sector("Service");

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
