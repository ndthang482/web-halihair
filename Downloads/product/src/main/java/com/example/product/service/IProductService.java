package com.example.product.service;

import com.example.product.domain.dto.PageOutput;
import com.example.product.domain.dto.ProductDTO;
import com.example.product.domain.entity.Description;
import com.example.product.domain.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.List;
import java.util.Map;

public interface IProductService {
    List<ProductDTO> findAllProductDTO();
    void createProductDTO(ProductDTO productDTO);
    void updateProductDTO(Long id, ProductDTO productDTO);
    void deleteProductDTO(Long id);
    ProductDTO findProductDTOById(Long id);
}
