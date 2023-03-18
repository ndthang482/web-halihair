package com.example.product.service;

import com.example.product.domain.entity.Description;

import java.util.List;

public interface IDescriptionService {
    List<Description> findAll();
}
