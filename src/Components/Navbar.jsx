import React from 'react'
import {
  Link
} from "react-router-dom";

const Navbar =()=> {
    return (
        <nav>
<h3>Logo</h3>
<ul>
    <Link to='/'>
    <li>Home</li>
    </Link>

        <Link to='/MyBooks'>
<li>My Books</li>
 </Link>

    <Link to='/Search'>
<li>Search</li>
 </Link>

</ul>
        </nav>
    )
}

export default Navbar
