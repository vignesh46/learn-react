import React from 'react';
import personClasses from './Person.css';

//Example of functional component
const Person = (props) => {
    console.log("[Person.js] render...");
    return (
        <div className = {personClasses.Person}>
            <p onClick={props.removePerson}>I am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            {/* this is do two way binding*/}
            <input type="text" value={props.name} onChange={props.twoWayBind} />
        </div>
    );
}

export default Person;