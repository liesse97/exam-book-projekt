import React,{useState,useEffect} from 'react';
import { Input, Space } from 'antd';
// import { Card, Col, Row } from 'antd';
import {
  Link
} from "react-router-dom";

const Search =()=> {
      const { Search } = Input;
      
    // const { Meta } = Card;

         const [books,setBooks]= useState([]);

        



  
     //update the state of our application every time we do an input

         const onSearch = async value => {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
             const books=await res.json()

 
    setBooks(books.items)
    
     }
  

   
    return (
        <div>
            <div>
                <Space direction="vertical">
                <Search placeholder="input search text" onSearch={ onSearch} enterButton />
            </Space>
            </div>

         
                {books.map(book => {
                
                    return (
                            <>

                       <Link to={`/book/${book.id}`}>
                                    <img
                                    key={book.id}
                                        src={book.volumeInfo.imageLinks ===  undefined ?"":book.volumeInfo.imageLinks.thumbnail}
                                        alt="warning"
                                        className="error-boundary-warning-img"
                                    />
                                    </Link>
                              
                               
                            


              </>

                    )
                   



                })
                }





          

   </div>

       
    )
}

export default Search;
