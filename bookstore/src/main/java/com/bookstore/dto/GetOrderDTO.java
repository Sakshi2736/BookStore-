package com.bookstore.dto;

import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class GetOrderDTO {
    private Long orderId;
    private String username;
    private LocalDateTime orderDate;
    private List<OrderItemDTO> items;

    @Data
    public static class OrderItemDTO {
        private String bookTitle;
        private int quantity;
        private double price;
    }
}