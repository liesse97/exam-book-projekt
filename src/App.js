import HomeBooks from './Components/HomeBooks/HomeBooks';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search'
import MyBooks from './Components/MyBooks'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './Components/Book.module.scss';
import { AuthProvider } from './Components/Auth/Auth';
import Sign from './Components/Auth/Sign';
import Chat from './Components/chat/chat';
import AddBooks from './Components/AddBooks'



import BookDescription from './Components/BookDescription'
import FilterSelect from './Components/Filter/FilterSelect'



const App =() => {
  return (
    <Router> 
   
    <div className={styles.App}>
      {/*  <img
                                            src='/back-bild.jpg'
                                            alt="warning"
                                            className="error-boundary-warning-img"
                                        /> */}
      <AuthProvider>


            <Navbar />
                  {/* Render out a component based on the url */}
<Switch>
                  {/* <Route path ='/'  exact component={HomeBooks} /> */}
                   <Route path ='/'  exact component={Search} />
                  {/* <Route path ='/Search' component={Search} /> */}
                 <Route path ='/Chat' component={ Chat} />
                 <Route path ='/book/:id' component={BookDescription} />
               <Route path ='/FilterSelect' component={FilterSelect} />
                              <Route path ='/AddBooks' component={AddBooks} />

               

   </Switch>
   </AuthProvider>

    </div>
     </Router>

  );
}

export default App;
