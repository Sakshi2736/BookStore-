<<<<<<< HEAD
# 📚 Online Book Store

An end-to-end **Online Book Store** application built using **React, Tailwind CSS, Vite, Spring Boot, Hibernate, and MySQL**. This full-stack project features **role-based access**, where **Customers** can browse, search, and order books, while **Admins** can manage books, users, and view sales analytics.

---

## 🔗 Live Demo
🚧 _Coming soon..._

---

## 🚀 Features

### 👥 Authentication & Authorization
- JWT-based login & registration
- Role-based access control (Admin & Customer)
- Secure protected routes with token validation

### 🛍️ Customer Features
- Browse all available books
- Search and view detailed book information
- Add/remove books from cart
- Checkout and place orders
- View order history

### 🛠️ Admin Features
- Dashboard overview
- Add, edit, delete books
- View all registered users

---

## 🧰 Tech Stack

| Frontend       | Backend         | Database | Security   | Build Tool |
|----------------|------------------|----------|------------|------------|
| React + Vite   | Spring Boot      | MySQL    | JWT + BCrypt | Maven     |
| Tailwind CSS   | Hibernate (JPA)  |          |            |            |

---

## 📁 Project Structure

### 📦 Frontend (`client/`)
src/
├── components/ # Reusable UI components
├── context/ # Auth context and provider
├── pages/
│ ├── Customer/ # Home, BookDetail, Cart, Orders
│ ├── Admin/ # Dashboard, ManageBooks, Users
│ └── Auth/ # Login, Register
├── routes/ # Route protection and layout
└── services/ # API calls using axios

shell
Copy
Edit

### ⚙️ Backend (`server/`)
src/
├── controller/ # REST controllers
├── model/ # JPA entities
├── repository/ # Spring Data JPA Repos
├── service/ # Business logic
├── config/ # Security configurations
└── dto/ # Data transfer objects

markdown
Copy
Edit

---

## 🔐 API Endpoints

### 📘 Books (Admin & Customer)
- `GET    /api/books`
- `POST   /api/books/add` (Admin)
- `PUT    /api/books/{id}` (Admin)
- `DELETE /api/books/{id}` (Admin)

### 🛒 Cart (Customer)
- `GET    /api/cart`
- `POST   /api/cart/add?bookId={id}`
- `POST   /api/cart/decrease?bookId={id}`
- `DELETE /api/cart/delete?bookId={id}`
- `DELETE /api/cart/clear`

### 🧾 Orders (Customer)
- `POST   /api/orders/checkout`
- `GET    /api/orders`

### 👤 Users (Admin)
- `GET    /api/users/all`
- `PUT    /api/users/ban/{id}`
- `PUT    /api/users/unban/{id}`

### 🔐 Auth
- `POST   /api/auth/register`
- `POST   /api/auth/login`

---

## 📦 Getting Started

### 🖥️ Frontend Setup

```bash
cd client
npm install
npm run dev
🖥️ Backend Setup
bash
Copy
Edit
cd server
./mvnw spring-boot:run
Make sure your MySQL server is running and update the DB credentials in application.properties.

📝 Environment Variables
🔐 application.properties (Spring Boot)
properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/bookstore
spring.datasource.username=root
spring.datasource.password=yourpassword

jwt.secret=your_jwt_secret
=======
# BookStore-
>>>>>>> 7a6555625a9370a293f1f1a9c2d39d7402de4c70
