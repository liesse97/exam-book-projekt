import React,{useState} from 'react'
import {
  Link
} from "react-router-dom";
import Sign from '../Auth/Sign'
import './Navbar.scss'

const Navbar =()=> {
    const [open,setopen]= useState(false)

    const active=()=>{
        if(open === true){
            return setopen(false)
        }
            else return setopen(true)
    }

    return (
        <nav >
            {/* <h3>Logo</h3> */}
            <div
            onClick={active}
             className='nav-hambugare' >
            <span className='bar'></span>
         <span className='bar'></span>
            <span className='bar'></span>
            </div>

 

<ul>
    <div
    className='divFlex'
     id={!open?'none':null}>


    <Link to='/'>
    {/* <li>Home</li> */}
    <li >Books</li>
    </Link>

     <Link to='/FilterSelect'>
<li >Filter</li>
 </Link>

        <Link to='/Chat'>
{/* <li>My Books</li> */}
<li >Community</li>
 </Link>
 </div>

    {/* <Link to='/Search'>
<li>Search</li>
 </Link> */}

 

</ul>
   <Link>
<Sign />

 </Link>
 
        </nav>
       
    )
}

export default Navbar
