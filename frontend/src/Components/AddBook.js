import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AddBooks() {
  const [bookDetails, setBookDetails] = useState([]);
  const [formData, setFormData] = useState({
    BookTitle: '',
    ISBN: '',
    Author: '',
    Category: '',
    Quantity: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newBook = { ...formData };
    setBookDetails([...bookDetails, newBook]);
    try{
        await axios.post('http://localhost:8000/books',newBook);
        setFormData({
            Title: '',
            ISBN: '',
            Author: '',
            Category: '',
            Quantity: ''
          });
    }
    catch(error){
        console.log("Error while adding Items");
    }  
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="BookTitle" value={formData.Title} onChange={handleChange} required/>
        </label>
        <br />
        <label>
          ISBN:
          <input type="text" name="ISBN" value={formData.ISBN} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="Author" value={formData.Author} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Category:
          <input type="text" name="Category" value={formData.Category} onChange={handleChange} required/>
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" name="Quantity" value={formData.Quantity} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Add Book</button>
        <br/><br/><br/>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/show'>Show Books</Link></li>
          <li><Link to='/search'>Search Books</Link></li>
          <li><Link to='/delete'>Delete Books</Link></li>
        </ul>
      </form>
    </>
  );
}
