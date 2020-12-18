import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    console.log("[Persons.js] render...");
    return props.persons.map((person, index) => {
        
        return <Person
            name={person.name}
            age={person.age}
            key={person.id}
            removePerson={props.removePerson.bind(this, index)}
            twoWayBind={props.twoWayBind.bind(this, person.id)}
        />
    });
};

export default persons;