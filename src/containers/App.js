import React, { Component } from 'react';
import appClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  //Lifecycle method 1
  constructor(props) {
    super(props);
    console.log("[App.js] constructor 1");
  }

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

  //Lifecycle method 2
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps 2 : ", props);
    return state;
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

  //Lifecycle method 3
  render() {

    console.log("[App.js] render... 3");

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

  //Lifecycle method 4
  componentDidMount() {
    console.log("[App.js] componentDidMount 4")
  }

}

export default App;
