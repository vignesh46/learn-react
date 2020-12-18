import React, { Component } from 'react';
import appClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            removePerson={this.removePerson}
            twoWayBind={this.twoWayBindingHandler}
          />
        </div>
      );

    }

    return (
      <div className={appClasses.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          togglePersons={this.togglePersons}
        />

        {persons}
      </div>
    );



  }
}

export default App;
