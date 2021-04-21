import React from 'react'
import {
  Link
} from "react-router-dom";

import './Navbar.scss'

const Navbar =()=> {
    return (
        <nav>
            {/* <h3>Logo</h3> */}

<ul>
    <Link to='/'>
    {/* <li>Home</li> */}
    <li>Books</li>
    </Link>

     <Link to='/FilterSelect'>
<li>Filter</li>
 </Link>

        <Link to='/MyBooks'>
{/* <li>My Books</li> */}
<li>Community</li>
 </Link>

    {/* <Link to='/Search'>
<li>Search</li>
 </Link> */}
   <Link>
<li>Login</li>
 </Link>
 

</ul>
{/* <div>
 <button>Login</button>
<button>Logout</button>
</div> */}
        </nav>
       
    )
}

export default Navbar
