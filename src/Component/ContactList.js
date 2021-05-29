import React from 'react'
import ContactCard from "./ContactCard"
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
        <div className="ui celled list">
            {RenderContactList}
        </div>
    )
}

export default ContactList