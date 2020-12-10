import React from 'react';
import './Person.css';
import Radium from 'radium';

//Example of functional component
const Person = (props) => {
    // Using Radium for media queries
    const styling = {
        '@media (min-width : 500px)' : {
            width : '450px'
        }
    }


    return (
        // Sample <Person name='Vignesh' age='25'>Hobby : Games</Person>
        //props.name will access Vignesh
        //props.age will access 25
        //props.children will access Hobby
        //props.nameChange is a event handler which we written in App.js
        <div className="Person" style = {styling}>
            <p onClick={props.removePerson}>I am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            {/* this is do two way binding*/}
            <input type="text" value={props.name} onChange={props.twoWayBind} />
        </div>
    );
}

export default Radium(Person);