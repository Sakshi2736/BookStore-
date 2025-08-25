package com.bookstore.service;

import com.bookstore.dto.CartItemDTO;
import com.bookstore.entity.CartItem;
import java.util.List;

public interface CartService {
    List<CartItemDTO> getCartByUserId();
    void deleteAll();
    void deleteCartItem(int bookId);
    void decreaseAmount(int bookId);
    void addCartItem(int bookId);
}