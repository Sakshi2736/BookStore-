-- Insert sample categories
INSERT IGNORE INTO categories (id, name, description, created_at, updated_at) VALUES
(1, 'Fiction', 'Fiction books including novels and short stories', NOW(), NOW()),
(2, 'Non-Fiction', 'Non-fiction books including biographies and essays', NOW(), NOW()),
(3, 'Science', 'Science and technology books', NOW(), NOW()),
(4, 'History', 'Historical books and documentaries', NOW(), NOW()),
(5, 'Programming', 'Programming and software development books', NOW(), NOW());

-- Insert sample admin user (password should be encoded in real application)
INSERT IGNORE INTO users (id, username, email, password, first_name, last_name, role, status, created_at, updated_at) VALUES
(1, 'admin', 'admin@bookstore.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin', 'User', 'ADMIN', 'ACTIVE', NOW(), NOW());

-- Note: The password above is 'password' encoded with BCrypt
-- In production, create admin user through proper registration with encoded password