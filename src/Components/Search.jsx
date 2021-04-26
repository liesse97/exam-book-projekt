import React,{useState,useEffect } from 'react';
import { Input, Space, Pagination,Popover, Button } from 'antd';
// import { Card, Col, Row } from 'antd';
import {
  Link
} from "react-router-dom";
import styles from './Book.module.scss';

const Search =()=> {
      const { Search } = Input;

         const [books,setBooks]= useState([]);
         const[indexStart,setIndexStart]=useState(0);
        //  const content= (<di>hello</di>)
         

         const handlePage= e =>{
           let index= (e-1)*40;
             setIndexStart(index)
         }

    

  
     //update the state of our application every time we do an input
 
         const onSearch = async (value) => {
             
          //  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&printType=books&maxResults=40&startIndex=80`)
                       const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&printType=books&maxResults=40`)
 
            const books=await res.json()
    setBooks(books.items)

     };

     //value = undefined until we click on the search part
     
//   useEffect(()=>{    

//  onSearch ();
//     },[indexStart]);

    
    
                 
  

   
    return (
       
        <div className={styles.searchBooks}>
            <div className={styles.search}>
                <Space direction="vertical">
                <Search placeholder="input search text" onSearch={ onSearch} enterButton />
            </Space>
            </div>


         
                {books.map(book => {
                
                    return (
                            <>
                       <Link to={`/book/${book.id}`}>
                            {/* <Popover 
                           content={content} 
                            title={book.volumeInfo.title}> */}
  
                                    <img
                                    key={book.id}
                                        src={book.volumeInfo.imageLinks ===  undefined ?'/no-cover.jpg':book.volumeInfo.imageLinks.thumbnail}
                                        alt="warning"
                                         onChange={onSearch}

                                        

                                    />
                                    {/* </Popover> */}
                                    </Link>
                              
                               
                            


              </>

                    )
                   



                })
                }
                              {/* <Pagination 
                              defaultCurrent={1}
                               total={50} 
                               onChange={handlePage}
                               
                               /> */}


  






  

 </div>
       
    )
}

export default Search;
