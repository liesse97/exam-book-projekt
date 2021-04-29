import React from 'react'
import {
  Link
} from "react-router-dom";
import Sign from '../Auth/Sign'
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

        <Link to='/Chat'>
{/* <li>My Books</li> */}
<li>Community</li>
 </Link>

    <Link to='/AddBooks'>
{/* <li>My Books</li> */}
<li>Add Books</li>
 </Link>


    {/* <Link to='/Search'>
<li>Search</li>
 </Link> */}
   <Link>
{/* <li>Login</li> */}
<Sign />

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
