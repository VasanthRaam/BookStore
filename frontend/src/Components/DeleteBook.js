import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DeleteBook(){

    const [id,setId] = useState("");
    const [flag,setFlag] = useState(false);

    const handleDelete = async() => {
        try{
            await axios.delete(`http://localhost:8000/delete/${id}`);
            setFlag(true);
        }
        catch(error){
            console.log("Error while Deleting")
        }

    }
    return(
        <>
            <label>
                Enter the ISBN :
                <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            </label>
            <button onClick={handleDelete}>
                Delete
            </button>
            {flag && <h1>Deleted Successfully</h1>}
                
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/show'>Show Books</Link></li>
                <li><Link to='/add'>Add Books</Link></li>
                <li><Link to='/search'>Search Books</Link></li>
            </ul>
        </>
    )
}