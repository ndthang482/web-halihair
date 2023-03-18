package com.example.product.service;

import com.example.product.domain.dto.ProductDTO;
import com.example.product.domain.entity.Description;
import com.example.product.domain.entity.Product;
import com.example.product.repository.DescriptionRepository;
import com.example.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.*;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {
    private final ProductRepository productRepository;
    private final DescriptionRepository descriptionRepository;

    @Override
    public List<ProductDTO> findAllProductDTO() {
        List<Product> products = productRepository.findAll();
        List<ProductDTO> productDTOS = products.stream().map(this::productDTO).toList();
        return productDTOS;
    }


    @Override
    public void createProductDTO(ProductDTO productDTO) {
        Product product = Product.builder()
                .name(productDTO.getName())
                .build();
        productRepository.save(product);

        Description description = Description.builder()
                .brand(productDTO.getBrand())
                .material(productDTO.getMaterial())
                .length(productDTO.getLength())
                .makeStyle(productDTO.getMakeStyle())
                .color(productDTO.getColor())
                .expiry(productDTO.getExpiry())
                .build();
        descriptionRepository.save(description);

    }
        @Override
        public void updateProductDTO(Long id, ProductDTO productDTO) {
            Product product = Product.builder()
                    .id(id)
                    .name(productDTO.getName())
                    .build();
            productRepository.save(product);
            Description description = Description.builder()
                    .id(id)
                    .brand(productDTO.getBrand())
                    .material(productDTO.getMaterial())
                    .length(productDTO.getLength())
                    .makeStyle(productDTO.getMakeStyle())
                    .color(productDTO.getColor())
                    .expiry(productDTO.getExpiry())
                    .build();
            descriptionRepository.save(description);
        }
    @Override
    public void deleteProductDTO(Long id) {
        Product product = productRepository.findById(id).orElseThrow(()
                -> new NotFoundException("Not found product with id: " + id));
        Description description = descriptionRepository.findById(id).orElseThrow(()
                -> new NotFoundException("Not found product with id: " + id));
        if(Objects.nonNull(product)) {
            productRepository.deleteById(id);
        }
        if(Objects.nonNull(description)) {
            descriptionRepository.deleteById(id);
        }
    }

    @Override
    public ProductDTO findProductDTOById(Long id) {
        Product product = productRepository.findById(id).orElseThrow(()
                -> new NotFoundException("Not found product with id: " + id));
        Description description = descriptionRepository.findById(id).orElseThrow(()
                -> new NotFoundException("Not found product with id: " + id));
        return ProductDTO.builder()
                .id(id)
                .name(product.getName())
                .brand(description.getBrand())
                .material(description.getMaterial())
                .makeStyle(description.getMakeStyle())
                .length(description.getLength())
                .color(description.getColor())
                .expiry(description.getExpiry())
                .build();
    }


    public ProductDTO productDTO(Product product){
        Description descriptions = descriptionRepository.findById(product.getId()).orElseThrow(() ->
                new NotFoundException("Not found description with id: " + product.getId()));
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(product.getId());
        productDTO.setName(product.getName());
        productDTO.setBrand(descriptions.getBrand());
        productDTO.setMaterial(descriptions.getMaterial());
        productDTO.setLength(descriptions.getLength());
        productDTO.setMakeStyle(descriptions.getMakeStyle());
        productDTO.setColor(descriptions.getColor());
        productDTO.setExpiry(descriptions.getExpiry());
        return productDTO;
    }

}
