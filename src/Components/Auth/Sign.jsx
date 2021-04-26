import React, { useContext, useState } from "react";
import firebase from "./../../firebase.js";
import { AuthContext } from "./Auth";
import ChatRoom from './../chat/chat';
import Filter from '../Filter/FilterSelect'


// const auth = firebase.auth();




const Sign =()=>{
         const { currentUser } = useContext(AuthContext);



const SignIn =()=> {
//You're mixing namespaces with instance:('firebase.auth() //error:GoogleAuthProvider is not a function)
// the firebaseApp is just a container for configuration data. It is not how you create a provider instance.
  const signInWithGoogle = () => {
    const provider = 
    new firebase
    .auth
    .GoogleAuthProvider();
    return firebase.auth()
    .signInWithPopup(provider).then ((res)=>{
      return res.user;

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
  return firebase.auth().currentUser && (
    <button className="sign-out" onClick={() => firebase.auth().signOut()}>Sign Out</button>
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