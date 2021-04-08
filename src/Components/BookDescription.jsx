import React,{useState,useEffect} from 'react';
import { Input, Space } from 'antd';
// import { Card, Col, Row } from 'antd';
import {
  Link
} from "react-router-dom";

const BookDescription =({match})=> {
  useEffect(()=>{
      BookItem();
      console.log('m'+ match)
  },[])
      

         const [book,setBook]= useState([]);
        //  console.log('j'+book.items[0].volumeInfo.title)

    const  BookItem = async () => {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=id : ${match.params.id}`)
                        //const res = await fetch(` https://books.google.com/ebooks?id=${match.params.id}`)

            
             const books=await res.json()

 
    setBook(books.items)
    
     }
   
    return (
        <div>
         <h1>hello</h1>


   </div>

       
    )
}

export default BookDescription;
