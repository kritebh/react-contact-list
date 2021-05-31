import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {uuid} from "uuidv4"
import React, { useState, useEffect } from 'react'
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactDetail from './ContactDetail'
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
    <Router>
      <Header />
      <Switch>
      <Route path="/add" render={(props)=>(<AddContact {...props} addContactHandler={addContactHandler} />)} />
      <Route path="/" exact render={(props)=>(<ContactList {...props} contacts={Contacts} getContactId={DeleteContact} />)} />
      <Route path="/contact/:id" component={ContactDetail}/ >
      </Switch>
    </Router>
    </div>
  );
}

export default App;
