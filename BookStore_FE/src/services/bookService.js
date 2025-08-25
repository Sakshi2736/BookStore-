// src/services/bookService.js
import axios from "../context/axios";

const BASE_URL = "http://localhost:8080/api/books";

export const fetchBooks = () => axios.get(BASE_URL);

export const deleteBook = (id) => axios.delete(`${BASE_URL}/${id}`);

export const addBook = (book) => axios.post(`${BASE_URL}/add`, book);

export const updateBook = (id, book) => axios.put(`${BASE_URL}/${id}`, book);

