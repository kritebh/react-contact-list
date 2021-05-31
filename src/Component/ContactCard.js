import React from 'react'
import {Link} from 'react-router-dom'
import icon from "../Images/icon.png"
const ContactCard =(props)=>
{
    const{id,name,email}=props.contacts
    return (
        <div className="item">
            <img className="ui avatar image" src={icon} alt="user" />
        <div className="content">
        <Link to={{pathname:`/contact/${id}`,state:{contact:props.contacts}}}>
            <div className="header">{name}</div>
            <div>{email}</div>
        </Link>
            <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px" }}
            onClick={()=>props.clickHandler(id)}></i>
        </div>
    </div>
    )
}

export default ContactCard