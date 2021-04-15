import React, { useRef, useState } from 'react';

import 'firebase/firestore'; //for our database
import firebase from 'firebase/app';

import ChatMessage from './ChatMessage'

import { useCollectionData } from 'react-firebase-hooks/firestore';


const firestore = firebase.firestore();
const auth = firebase.auth();


export default function ChatRoom() {
      const dummy = useRef();

     const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  //listen to data with hook,i returns an array of object where eact object is an array of the chatroom in the datatbase
  //reacts to change in realtime
  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
 }

    return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}
