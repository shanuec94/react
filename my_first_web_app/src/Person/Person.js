import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
          <p onClick={props.click}>Hi, I am {props.name} and my age is {props.age} year old!</p> 
          <p>{props.children}</p> 
          <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
    
    //<p>Hi, I am {props.name} and my age is {props.age} year old!</p>

   //return <p>Hi, I am Person {Math.floor(Math.random() * 30)} Year old!</p>
};

export default person;