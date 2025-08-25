import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/books`)
      .then(res => {
        const targetBook = res.data.find(b => b.id === parseInt(id));
        if (targetBook) setBook(targetBook);
        else alert("Book not found");
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/books/${id}`, book);
      alert("Book updated successfully");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Edit Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border" />
        <input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Author" className="w-full p-2 border" />
        <textarea name="description" value={book.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border"></textarea>
        <input type="number" name="price" value={book.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border" />
        <input type="text" name="imageUrl" value={book.imageUrl} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Update Book</button>
      </form>
    </div>
  );
};

export default EditBookForm;
