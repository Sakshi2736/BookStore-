package com.bookstore.controller;

import com.bookstore.dto.NewOrderDTO;
import com.bookstore.dto.GetOrderDTO;
import com.bookstore.entity.Order;
import com.bookstore.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @GetMapping
    @PreAuthorize("hasRole('CUSTOMER')")
    public List<GetOrderDTO> getOrders() {
        return orderService.getOrder();
    }

    @PostMapping("/checkout")
    @PreAuthorize("hasRole('CUSTOMER')")
    public Order checkout(@RequestBody NewOrderDTO newOrderDTO) {
        return orderService.addOrder(newOrderDTO);
    }
}