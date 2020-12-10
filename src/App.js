import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {
        id: "101",
        name: 'Vignesh',
        age: '34'
      },
      {
        id: "102",
        name: 'Karthi',
        age: '27'
      }
    ],

    showPersons: false
  }

  twoWayBindingHandler = (id, event) => {

    const persons = [...this.state.persons];
    const index = persons.findIndex(p => p.id === id);
    const person = persons[index];
    person.name = event.target.value;
    persons[index] = person;

    this.setState({
      persons: persons
    })

  }

  togglePersons = () => {
    this.setState(
      {
        showPersons: !this.state.showPersons
      }
    )
  }

  removePerson = (index) => {
    const personsCpy = [...this.state.persons];
    personsCpy.splice(index, 1);
    this.setState({ persons: personsCpy })
  }

  render() {

    //Inline CSS
    const styling = {
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      backgroundColor: 'green',
      color: 'white'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* Key Expected by React to work efficiantly internally */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                removePerson={this.removePerson.bind(this, index)}
                twoWayBind={this.twoWayBindingHandler.bind(this, person.id)}
              />
            )
          })}
        </div>
      );

      styling.backgroundColor = 'red';

    }

    let classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>My First React App</h1>
        <p className={classes.join(' ')}> This is relally working!! </p>
        <button style={styling} onClick={this.togglePersons}>Toggle Persons</button>

        {persons}
      </div>
    );



  }
}

export default App;
