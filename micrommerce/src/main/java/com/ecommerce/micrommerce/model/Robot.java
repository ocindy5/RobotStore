package com.ecommerce.micrommerce.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.w3c.dom.Text;


import javax.persistence.*;
import java.awt.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "robot")
public class Robot {


    @Id
    @GeneratedValue
    private Long id;
    @NonNull
    private String name;
    private String price;
    @Lob
    @Column
    private String description;
}