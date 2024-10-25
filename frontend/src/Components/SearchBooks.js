import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SearchBooks(){

    const [id,setId] = useState("");
    const [flag,setFlag] = useState(false);

    const[data,setData] = useState(null);

    const handleSearch = async() => {
        const response = await axios.get(`http://localhost:8000/search/${id}`);
        setData(response.data);
        console.log(response.data);
        setFlag(true);
    }

    return(
        <>
            <label>
                Enter the ISBN :
                <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            </label>
            <button onClick={handleSearch}>
                Search
            </button>
            <h4>The Details of the Book :</h4>
            {flag && data ? (
                <ul>
                    <li><strong>Title:</strong> {data.BookTitle}</li>
                    <li><strong>ISBN:</strong> {data.ISBN}</li>
                    <li><strong>Author:</strong> {data.Author}</li>
                    <li><strong>Category:</strong> {data.Category}</li>
                    <li><strong>Quantity:</strong> {data.Quantity}</li>
                </ul>
                ) : (
                    flag && <p>No book found with this ISBN.</p>
                )}
                
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/show'>Show Books</Link></li>
                <li><Link to='/add'>Add Books</Link></li>
                <li><Link to='/delete'>Delete Books</Link></li>
            </ul>
        </>
    )
}