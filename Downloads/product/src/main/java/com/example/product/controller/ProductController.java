package com.example.product.controller;

import com.example.product.common.AppConstants;
import com.example.product.domain.dto.ProductDTO;
import com.example.product.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    private final IProductService productService;

//    @GetMapping("")
//    public List<Product> findAll(){
//        return productService.findAll();
//    }
//    @GetMapping("/{id}")
//    public ProductDTO findProductDTOById(@PathVariable("id") Long id){
//        return productService.findAllProductDTO(id);
//    }
    @GetMapping("/product")
    public List<ProductDTO> findAllProductDTO(
//            @RequestParam(required = false, defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int pageNo,
//            @RequestParam(required = false, defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int pageSize,
//            @RequestParam(required = false, defaultValue = AppConstants.DEFAULT_SORT_BY) String sortBy,
//            @RequestParam(required = false, defaultValue = AppConstants.DEFAULT_SORT_DIRECTION) String sortDir
    ) {
        return productService.findAllProductDTO();
    }
    @GetMapping("/product/{id}")
    public ProductDTO findProductDTOById(@PathVariable("id") Long id) {
        return productService.findProductDTOById(id);
    }

    @PostMapping("/product")
    public void createproductDTO(@RequestBody ProductDTO productDTO){
        productService.createProductDTO(productDTO);
    }
    @PutMapping("/product/{id}")
    public void updateproductDTO(@PathVariable("id") Long id, @RequestBody ProductDTO productDTO){
        productService.updateProductDTO(id, productDTO);
    }

    @DeleteMapping("/product/{id}")
    public void deleteProductDTO(@PathVariable("id") Long id){
        productService.deleteProductDTO(id);
    }
}
