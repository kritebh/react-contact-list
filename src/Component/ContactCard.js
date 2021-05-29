import React from 'react'
import icon from "../Images/icon.png"
const ContactCard =(props)=>
{
    const{id,name,email}=props.contacts
    return (
        <div className="item">
            <img className="ui avatar image" src={icon} alt="user" />
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px" }}
            onClick={()=>props.clickHandler(id)}></i>
        </div>
    </div>
    )
}

export default ContactCard