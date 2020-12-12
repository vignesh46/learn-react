import React, { Component } from 'react';
import appClasses from  './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {
        id: "101",
        name: 'Vignesh',
        age: '25'
      },
      {
        id: "102",
        name: 'Karthi',
        age: '26'
      },
      {
        id: "103",
        name: 'Martin',
        age: '25'
      },
      {
        id: "104",
        name: 'Krishna',
        age: '26'
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

    let persons = null;
    //ButtonClass reference
    let buttonClass = [appClasses.Button];

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

      buttonClass.push(appClasses.Red);

    }

    let classes = [];

    if (this.state.persons.length <= 3) {
      classes.push(appClasses.red);
    }

    if (this.state.persons.length <= 1) {
      classes.push(appClasses.bold);
    }

    return (
      <div className={appClasses.App}>
        <h1>My First React App</h1>
        <p className={classes.join(' ')}> This is relally working!! </p>
        
        <button className={buttonClass.join(' ')} onClick={this.togglePersons}>Toggle Persons</button>

        {persons}
      </div>
    );



  }
}

export default App;
