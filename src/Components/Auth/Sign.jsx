import React, { useContext, useState } from "react";
 import firebase from "./../../firebase";
import { AuthContext } from "./Auth";
import {db, auth} from './../../firebase'
// import ChatRoom from './../chat/chat';
// import Filter from '../Filter/FilterSelect'


// const auth = firebase.auth();




const Sign =()=>{
         const { currentUser } = useContext(AuthContext);



const SignIn =()=> {
//You're mixing namespaces with instance:('firebase.auth() //error:GoogleAuthProvider is not a function)
// the firebaseApp is just a container for configuration data. It is not how you create a provider instance.
  const signInWithGoogle = () => {
    const provider =  new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then ( function(res){
      //  return res.user;
      const user = res.user
      console.log(user)

    }).catch((er)=>{
      return er;
    });
 
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      {/* <p>Do not violate the community guidelines or you will be banned for life!</p> */}
    </>
  )

}

const SignOut =()=> {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}
return (
  <div className='App'>
      {/* <header>
        <h1>💬</h1>
        <SignOut />
      </header> */}

      <section>
        {currentUser ? <SignOut />: <SignIn />}

      </section>

    </div>
  );
};

export default Sign;