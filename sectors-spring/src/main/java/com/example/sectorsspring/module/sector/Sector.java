package com.example.sectorsspring.module.sector;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
public class Sector {

    @Id
    @Column(name = "sector_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Number value;
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private Sector parentSector;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "parentSector", cascade = CascadeType.ALL)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Sector> childrenSectors = new ArrayList<>();

    public Sector(String name, Number value) {
        this.name = name;
        this.value = value;
    }

    public Sector(String name, Number value, Sector parentSector) {
        this.name = name;
        this.value = value;
        this.parentSector = parentSector;
    }

    public void addChild(Sector children) {
        this.childrenSectors.add(children);
    }

}
