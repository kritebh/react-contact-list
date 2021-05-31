import React from 'react'
import ContactCard from "./ContactCard"
import {Link} from "react-router-dom"
const ContactList=(props)=>
{
    const deleteContactHandler =(id)=>{
        props.getContactId(id);
    }

    const RenderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contacts={contact} clickHandler={deleteContactHandler} key={contact.id}/>  )
    })
    return(
        <div className="main">
        <Link to="/add">
        <button className="ui button blue right">Add Contact</button>
        </Link>
        <h2>All Contact List</h2>
        <div className="ui celled list">
            {RenderContactList}
        </div>
        </div>
    )
}

export default ContactList