import React from 'react';
import cockpitClasses from './Cockpit.css'

const cockpit = (props) => {

    console.log("[Cockpit.js] render...");

    let buttonClass = [cockpitClasses.Button];

    if (props.showPersons) {

      buttonClass.push(cockpitClasses.Red);

    }
    
    const classes = [];

    if (props.persons.length <= 3) {
      classes.push(cockpitClasses.red);
    }

    if (props.persons.length <= 1) {
      classes.push(cockpitClasses.bold);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}> This is relally working!! </p>
            <button className={buttonClass.join(' ')} onClick={props.togglePersons}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;