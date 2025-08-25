package com.bookstore.dto;

import lombok.Data;
import java.util.List;

@Data
public class NewOrderDTO {
    private List<OrderItemDTO> items;

    @Data
    public static class OrderItemDTO {
        private Long bookId;
        private int quantity;
    }
}
