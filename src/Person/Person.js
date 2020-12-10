import React from 'react';
import './Person.css';

//Example of functional component
const Person = (props) => {
    return (
        // Sample <Person name='Vignesh' age='25'>Hobby : Games</Person>
        //props.name will access Vignesh
        //props.age will access 25
        //props.children will access Hobby
        //props.nameChange is a event handler which we written in App.js
        <div className="Person">
            <p onClick={props.removePerson}>I am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            {/* this is do two way binding*/}
            <input type="text" value={props.name} onChange={props.twoWayBind} />
        </div>
    );
}

export default Person;