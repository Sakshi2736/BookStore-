package com.bookstore.controller;

import com.bookstore.dto.CartItemDTO;
import com.bookstore.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;

    @PostMapping("/add")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<String> addCartItem(@RequestParam int bookId) {
        cartService.addCartItem(bookId);
        return ResponseEntity.ok("Item added to cart");
    }

    @GetMapping
    @PreAuthorize("hasRole('CUSTOMER')")
    public List<CartItemDTO> getCart() {
        return cartService.getCartByUserId();
    }

    @PostMapping("/decrease")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<String> decreaseAmount(@RequestParam int bookId) {
        cartService.decreaseAmount(bookId);
        return ResponseEntity.ok("Item amount decreased");
    }

    @DeleteMapping("/delete")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<String> deleteCartItem(@RequestParam int bookId) {
        cartService.deleteCartItem(bookId);
        return ResponseEntity.ok("Item deleted from cart");
    }

    @DeleteMapping("/clear")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<String> clearCart() {
        cartService.deleteAll();
        return ResponseEntity.ok("Cart cleared");
    }
}