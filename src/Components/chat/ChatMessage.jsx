import React from 'react'
import firebase from 'firebase/app';
import 'firebase/auth'; //user authethication


const auth = firebase.auth();

export default function ChatMessage(props) {
    const { text, uid, photoURL } = props.message; // acceseeing it from the props mesage

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt='' />
      <p>{text}</p>
    </div>
  </>)
}
