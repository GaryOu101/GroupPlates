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
        {user ? <CuisineSearch onSubmit={submitPreference} inputChange={inputChange}/> : <Signin/>}
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

const cuisines = [
  { id: 1, name: 'Italian' },
  { id: 2, name: 'Mexican' },
  { id: 3, name: 'Chinese' },
  { id: 4, name: 'Indian' },
  { id: 5, name: 'Japanese' },
  { id: 6, name: 'American'}
  // ... add more cuisines
];

const CuisineSearch = () => {
  const [query, setQuery] = useState('');

  const filteredCuisines = cuisines.filter((cuisine) =>
    cuisine.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Search for Cuisine</h1>
      <input
        type="text"
        placeholder="Enter cuisines..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredCuisines.map((cuisine) => (
          <li key={cuisine.id}>{cuisine.name}</li>
        ))}
      </ul>
    </div>
  );
};



function storeData(){
  console.log("yo");
}