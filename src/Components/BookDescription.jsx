import React,{useState,useEffect} from 'react';
import styles from './Book.module.scss';
import { Select } from 'antd';
import Chat from './chat/chat'




// få enskild book
const BookDescription =({match})=> {
  useEffect(()=>{
      BookItem();
  },[])
          const { Option } = Select;

      

         const [book,setBook]= useState({});
        //  console.log(book)

    const  BookItem = async () => {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${match.params.id}`)
            //authors books:https://www.googleapis.com/books/v1/volumes?q=+inauthor:Karina

                      

            
             const books=await res.json()

 
  setBook(books.volumeInfo)
    
     }
   
    return (
<>  
        <div className={styles.detail}>
          <div>
          <img    
                                        // src={book.imageLinks.thumbnail}
                                        alt="warning"
                                         src={book.imageLinks ===undefined ?'/no-cover.jpg' :book.imageLinks.thumbnail}

                                    />
                                    <button>Want to read</button>
                                     {/* <Select defaultValue="choose" style={{ width: 150 }}>
      <Option value="Want to read">Want to read</Option>
            <Option value="FR">is reading</Option>
      <Option value="US">read</Option>
         </Select> */}

                                     
                                    <button>Leave Review</button>
                                    </div>
                                 

                                    <div className={styles.text}>
                                             <h2>{book.title}</h2>
                                          
                                             {book.authors&&book.authors.map(author=>{
                                               return(
                                             <h3>{author}</h3>)})}
                                            
                                              

                                             <p>{book.description? book.description.replace(/<[^>]+>/g, ''):null }</p>
                                             
                                           
                                             </div>
                                              <div>
                                                                                                

                                              {/* {!book.categories?null : book.categories.map(categorie=>{
                                               return(

                                             <h4>{categorie}</h4>)})} */}
                                             </div>
                                             
   


</div>

</>

       
    )
}

export default BookDescription;
