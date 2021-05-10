import React,{useState,useEffect} from 'react'
import {db, auth,storage} from  "../firebase"
 import firebase from "../firebase";
 //uuid will generate a random id
 import { v4 as uuidv4 } from "uuid";
//  import { storage } from "./firebase";





const AddBooks =()=> {
    const[add, setAdd]= useState([])
    const[loading, setLoading]= useState(false)

     const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);

    const ref= db.collection('AddBooks')
    // console.log(ref)

     const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    else{
      setImage(null)
    }
  };

 const onFileChange = () => {
       setLoading(true);
    const uploadTask = storage.ref(`images/${File.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {  },
      
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(File.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
              console.log(url)
                     setLoading(false);


          });
      }
    );
  };
  console.log(image)



     function getBook() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const book = [];
      querySnapshot.forEach((doc) => {
        book.push(doc.data());
      });
      setAdd(book);
      setLoading(false);
    });
  }

   useEffect(() => {
    getBook();
    // onFileChange();
  }, []);

  


   function addBooks(newBooks) {

    ref
    
      .doc(newBooks.id)
           .set(newBooks)
      .catch((err) => {
        console.error(err);
      });
  }

  function deleteBooks(book){
    //we refer the doc with our school.id(the same in the doc as in the method) and the amped the delete function 
       ref
      .doc(book.id)
      .delete()
      .catch((err) => {
        console.error(err);
        });
  }

  // EDIT FUNCTION
  function editBook(updatedbook) {
    setLoading();
    ref
      .doc(updatedbook.id)
      .update(updatedbook)
      .catch((err) => {
        console.error(err);
      });
  }

 ;

    if (loading){
        return <h1>Loading ...</h1>
    }
    return (
        <div>
<h1>Books Added</h1> 

<div className="inputBox">
        <h3>Add New</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="file" onChange={handleChange} />

        <button onClick={() => addBooks({ title,description, id: uuidv4() })}>
          Submit
        </button>
      </div>
 {/* {add.map((book)=>{
                                               return(
                                                   <div key={book.id}>
                                             <h3>{book.title}</h3>
                                             <h3>{book.description}</h3>
                                             <div>
            <button onClick={() => deleteBooks(book)}>X</button>
              <button
              onClick={() =>
                editBook({ title: book.title, description, id: book.id })
                //want to change title also 
                // editBook({ title, description, id: book.id })

              }
            >
              Edit
            </button>
            </div>
            </div>
        
 )})} */}

</div>
    )
}
export default AddBooks
