import React from 'react';
import './Card.css'



const Card = (props) => (
    <li className="card">
       <h3>{props.name}</h3>
       <p> {props.email}</p>
       <p> {props.website}</p>
       
    </li>
)

export default Card;