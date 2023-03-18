package com.example.product.service;

import com.example.product.domain.entity.Description;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DescriptionService implements IDescriptionService{

    @Override
    public List<Description> findAll() {
        return null;
    }
}
