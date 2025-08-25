package com.bookstore.service;

import com.bookstore.dto.GetOrderDTO;
import com.bookstore.dto.NewOrderDTO;
import com.bookstore.entity.Book;
import com.bookstore.entity.Order;
import com.bookstore.entity.OrderItem;
import com.bookstore.entity.User;
import com.bookstore.repository.BookRepository;
import com.bookstore.repository.OrderRepository;
import com.bookstore.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepo;
    private final UserRepository userRepo;
    private final BookRepository bookRepo;

    @Override
    public List<GetOrderDTO> getOrder() {
        User user = getCurrentUser();
        List<Order> orders = orderRepo.findByCustomer(user);
        return orders.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private GetOrderDTO convertToDTO(Order order) {
        GetOrderDTO dto = new GetOrderDTO();
        dto.setOrderId(order.getId());
        dto.setUsername(order.getCustomer().getUsername());
        dto.setOrderDate(order.getOrderDate());
        List<GetOrderDTO.OrderItemDTO> items = order.getItems().stream().map(item -> {
            GetOrderDTO.OrderItemDTO itemDTO = new GetOrderDTO.OrderItemDTO();
            itemDTO.setBookTitle(item.getBook().getTitle());
            itemDTO.setQuantity(item.getQuantity());
            itemDTO.setPrice(item.getBook().getPrice());
            return itemDTO;
        }).collect(Collectors.toList());
        dto.setItems(items);
        return dto;
    }

    @Override
    public Order addOrder(NewOrderDTO newOrderDTO) {
        User user = getCurrentUser();

        Order order = new Order();
        order.setCustomer(user);
        order.setOrderDate(LocalDateTime.now());

        List<OrderItem> orderItems = newOrderDTO.getItems().stream().map(itemDTO -> {
            Book book = bookRepo.findById(itemDTO.getBookId())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid book ID"));
            OrderItem orderItem = new OrderItem();
            orderItem.setBook(book);
            orderItem.setQuantity(itemDTO.getQuantity());
            orderItem.setOrder(order);
            return orderItem;
        }).toList();

        order.setItems(orderItems);
        return orderRepo.save(order);
    }

    private User getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepo.findByUsername(username)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
    }
}
