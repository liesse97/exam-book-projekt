import { Select } from 'antd';
import React,{useState} from 'react';
import {
  Link
} from "react-router-dom";
import styles from '../Book.module.scss';
// import { Input, Space, Pagination } from 'antd';



const Filter = ()=> {
        const { Option } = Select;
             const [subject, setSubject] = useState([])

             const values =[
               'Science Fiction',
               'Fantasy',
               'Manga',
               'Action', 
               'Adventure',
'Classics',
'Comic Book',
 'Graphic Novel',
'Detective', 
'Mystery',
'Historical Fiction',
'Horror',
'Literary Fiction']

            const [lang, setLang] = useState()
            const[country,setCountry]=useState()

            const handleLang=(value)=>{
              setLang(value)
            }
             const handleCountry=(value)=>{
              setCountry(value)
            }




const  handleChange= async (value) => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${value}&maxResults=40&&printType=books&langRestrict=${lang}&components=country:${country}`);
             const books=await res.json()
     setSubject(books.items)
     
}

// const  langChange= async (value) => {
//     console.log(`selected ${value}`);
//    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=country=IN:${value}`);
//              const books=await res.json()
//      setLang(books.items)


// }



    return (
        <div className={styles.searchBooks}>

        

     <div className={styles.search}>

    <Select defaultValue="Genre"  style={{ width: 150 }} onChange ={ handleChange} >
      {values.map( value=>{
                 

        return(
        <Option value={value}>{value}</Option>
      
      )})}
      
      
          </Select>
    
      <Select defaultValue="Language" style={{ width: 150 }} onChange={handleLang}>
      <Option value="fr">French</Option>
      <Option value="en">English</Option>
            <Option value="sv">Swedish</Option>
                        <Option value="zh">China</Option>
                                                <Option value="tr">turkish</Option>





         </Select>

         <Select defaultValue="Country" style={{ width: 150 }} onChange={handleCountry}>
      <Option value="FR">France</Option>
      <Option value="US">England</Option>
                  <Option value="SV">Swedish</Option>

         </Select>

     

         </div> 

         
                 {!subject?'nothing':subject.map(book => {
                
                    return (
                            <>
                       <Link to={`/book/${book.id}`}>
                                    <img
                                    key={book.id}
                                        src={book.volumeInfo.imageLinks ===  undefined ?'/no-cover.jpg':book.volumeInfo.imageLinks.thumbnail}
                                        alt="warning"
                                        

                                    />
                                    </Link>
                                    </>
                              
                  )})}
                   
                    {/* <Pagination 
                              defaultCurrent={1}
                               total={50} 
                               onChange={handlePage}
                               
                               /> */}

                 
            
        </div>
    )
}
export default Filter
