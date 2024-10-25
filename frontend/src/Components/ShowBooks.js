import axios from 'axios';
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';

export default function ShowBooks(){

    const[books,setBooks] = useState([]);

    useEffect(()=>{
        FetchItems();
    },[])

    const FetchItems = async() => {
        const response = await axios.get('http://localhost:8000/books');
        setBooks(response.data);
        console.log(response.data);
    }
    return(
        <>
            <h1>Books</h1>
            <ul>
                {books.map((books,index)=>(
                    <>
                        <li key={index}>
                            <strong>Title:</strong> {books.BookTitle} <br />
                            <strong>ISBN:</strong> {books.ISBN} <br />
                            <strong>Author:</strong> {books.Author} <br />
                            <strong>Category:</strong> {books.Category} <br />
                            <strong>Quantity:</strong> {books.Quantity}
                        </li>
                        <br/><br/><br/>
                    </>
                    
                ))}
            </ul>
            <br/><br/>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add'>Add Books</Link></li>
                <li><Link to='/search'>Search Books</Link></li>
                <li><Link to='/delete'>Delete Books</Link></li>
            </ul>
        </>
    )
}