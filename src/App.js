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
    

            <Navbar />
                  {/* Render out a component based on the url */}
<Switch>
                  {/* <Route path ='/'  exact component={HomeBooks} /> */}
                   <Route path ='/'  exact component={Search} />
                  {/* <Route path ='/Search' component={Search} /> */}
                 <Route path ='/MyBooks' component={MyBooks} />
                 <Route path ='/book/:id' component={BookDescription} />
               <Route path ='/FilterSelect' component={FilterSelect} />


   </Switch>
    </div>
     </Router>

  );
}

export default App;
