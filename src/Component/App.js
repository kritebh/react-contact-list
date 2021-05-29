import './App.css';
import {uuid} from "uuidv4"
import React, { useState, useEffect } from 'react'
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
function App() {
  const LOCAL_STORAGE_KEY ="Kritebh"
  const [Contacts, setContacts] = useState([])
  const addContactHandler = (e) => {

    setContacts([...Contacts, {id:uuid(), ...e}])
  }
  
const DeleteContact=(id)=>{

const newContactList = Contacts.filter((contact)=>{
  return contact.id !== id;
})
setContacts(newContactList)
}


  // Hooks for retrieving data from localhost
  useEffect(()=>{
    const AllContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (AllContacts) setContacts(AllContacts)
  },[])

  // Hooks for Storing data in localhost
useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(Contacts))
},[Contacts])



  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={Contacts} getContactId={DeleteContact}/>
    </div>
  );
}

export default App;
