import React from 'react';
import './Person.css';
import Styled from 'styled-components';

//Below is also a component - it using nornmal js tagged tempelate literal
const StyledDiv = Styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width : 500px) {
        width: 450px;
    }
`

//Example of functional component
const Person = (props) => {

    return (
        <StyledDiv>
            <p onClick={props.removePerson}>I am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            {/* this is do two way binding*/}
            <input type="text" value={props.name} onChange={props.twoWayBind} />
        </StyledDiv>
    );
}

export default Person;