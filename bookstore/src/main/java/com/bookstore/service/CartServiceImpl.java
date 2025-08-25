package com.bookstore.service;

import com.bookstore.dto.CartItemDTO;
import com.bookstore.entity.Book;
import com.bookstore.entity.CartItem;
import com.bookstore.entity.User;
import com.bookstore.repository.BookRepository;
import com.bookstore.repository.CartItemRepository;
import com.bookstore.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartItemRepository cartRepo;
    private final UserRepository userRepo;
    private final BookRepository bookRepo;

    @Override
    public List<CartItemDTO> getCartByUserId() {
        User user = getCurrentUser();
        List<CartItem> cartItems = cartRepo.findByUser(user);
        return cartItems.stream().map(this::toDTO).collect(Collectors.toList());
    }

    private CartItemDTO toDTO(CartItem item) {
        return CartItemDTO.builder()
                .id(item.getId())
                .bookId(item.getBook().getId())
                .title(item.getBook().getTitle())
                .author(item.getBook().getAuthor())
                .price(item.getBook().getPrice())
                .quantity(item.getQuantity())
                .build();
    }

    @Override
    public void deleteAll() {
        User user = getCurrentUser();
        cartRepo.deleteByUser(user);
    }

    @Override
    @Transactional
    public void deleteCartItem(int bookId) {
        User user = getCurrentUser();
        Book book = bookRepo.findById((long) bookId).orElseThrow(() -> new IllegalArgumentException("Book not found"));
        cartRepo.deleteByUserAndBook(user, book);
    }

    @Override
    public void decreaseAmount(int bookId) {
        User user = getCurrentUser();
        Book book = bookRepo.findById((long) bookId).orElseThrow(() -> new IllegalArgumentException("Book not found"));
        CartItem cartItem = cartRepo.findByUserAndBook(user, book).orElseThrow(() -> new IllegalArgumentException("Cart item not found"));

        if (cartItem.getQuantity() > 1) {
            cartItem.setQuantity(cartItem.getQuantity() - 1);
            cartRepo.save(cartItem);
        } else {
            cartRepo.delete(cartItem);
        }
    }

    @Override
    public void addCartItem(int bookId) {
        User user = getCurrentUser();
        Book book = bookRepo.findById((long) bookId).orElseThrow(() -> new IllegalArgumentException("Book not found"));
        CartItem cartItem = cartRepo.findByUserAndBook(user, book).orElse(null);

        if (cartItem == null) {
            cartItem = new CartItem();
            cartItem.setUser(user);
            cartItem.setBook(book);
            cartItem.setQuantity(1);
        } else {
            cartItem.setQuantity(cartItem.getQuantity() + 1);
        }

        cartRepo.save(cartItem);
    }

    private User getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepo.findByUsername(username).orElseThrow(() -> new IllegalArgumentException("User not found"));
    }
}