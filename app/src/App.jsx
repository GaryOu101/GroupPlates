import { useState } from 'react'
import './App.css'

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

firebase.initializeApp(
  {
    apiKey: "AIzaSyC8YrByYYCZdZSOenI3TieRGYWW-B7ClO0",
    authDomain: "groupplates.firebaseapp.com",
    projectId: "groupplates",
    storageBucket: "groupplates.appspot.com",
    messagingSenderId: "816422539554",
    appId: "1:816422539554:web:ef0da905b330a6c9d2157b",
    measurementId: "G-852P55N5C4"
  }
);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth)
  const [preference, setPreference] = useState("");

  const submitPreference = (event) => {
    event.preventdefault();

  }

  const inputChange = (event) => {

  }


  return (
    <>
      <div>
        {user ? <Form onSubmit={submitPreference} inputChange={inputChange}/> : <Signin/>}
      </div>
    </>
  )
}

export default App

function Signin(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in here</button>
    </div>
  );
}

function Form(){

  return (
    <form>
      <input type='text' id='cuisine' onSubmit={storeData}></input>
      <button type='submit'>Submit Preference</button>
    </form>
  );
}

function storeData(){
  console.log("yo");
}