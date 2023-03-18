package com.example.product.domain.dto;

import com.example.product.domain.entity.Description;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ProductDTO {
    private Long id;
    private String name;
    private String brand;
    private String material;
    private String length;
    private String makeStyle;
    private String color;
    private String expiry;
}
