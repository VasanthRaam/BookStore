import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <>
            <h1>Book Management</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add'>Add Books</Link></li>
                <li><Link to='/show'>Show Books</Link></li>
                <li><Link to='/search'>Search Books</Link></li>
            </ul>
        </>
    )
}