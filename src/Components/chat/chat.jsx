  
import React, { useRef, useState,useContext } from 'react';
  import './Chat.scss';
// import styles from '../Book.module.scss';
// import firebase from 'firebase/app';
import firebase from './../../firebase'
//import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';
// import ChatRoom from './ChatRoom'

// import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
 import { AuthContext } from "../Auth/Auth";


const ChatRoom=()=> {

            const { currentUser} = useContext(AuthContext);
            //const uid = currentUser.uid
            //console.log(uid)


  const dummy = useRef();
  // const messagesRef = firestore.collection('messages');
    const messagesRef = firebase.firestore().collection('messages');

  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = firebase.auth().currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
  <div className="Form">
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      {/* <button type="submit" disabled={!formValue}>🕊️</button> */}
      <button type="submit" disabled={!formValue}>Send</button>

    </form>
  </div>
  )
}


function ChatMessage(props) {
   console.log(props)
  const { text, uid,photoURL} = props.message;

  //compare between message that were send and recieved
// if (uid === null) return 'hello';
  const messageClass = uid === firebase.auth().currentUser.uid ? 'sent' : 'received';

  return (<>
    {/* <div className={`message ${messageClass}`}> */}
    <div className={`message ${messageClass}`}>
      
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default ChatRoom;



//const auth = firebase.auth();
//  const firestore = firebase.firestore();
//  const analytics = firebase.analytics();


// function Chat() {

//   const [user] = useAuthState(auth);

//   return (
//     <div className='App'>
//       {/* <header>
//         <h1>💬</h1>
//         <SignOut />
//       </header> */}

//       <section>
//         {/* {user ? <ChatRoom /> : <SignIn />} */}
//         <ChatRoom />

//       </section>

//     </div>
//   );
// }

// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p>Do not violate the community guidelines or you will be banned for life!</p>
//     </>
//   )

// }

// function SignOut() {
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }

