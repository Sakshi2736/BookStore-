package com.bookstore.service;

import com.bookstore.dto.GetOrderDTO;
import com.bookstore.dto.NewOrderDTO;
import com.bookstore.entity.Order;
import java.util.List;

public interface OrderService {
    List<GetOrderDTO> getOrder();
    Order addOrder(NewOrderDTO newOrderDTO);
}