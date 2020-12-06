import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Test React App</h1>
  //     </div>
  //   );

    //Above code is simplified code of this
    //return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Test React App'));

    state = {
      persons : [
        {
          name : 'Arun',
          age : '34'
        },
        {
          name : 'Karthi',
          age : '27'
        }
      ],

      info : 'Person details'
    }

    nameChangeHandler = () => {
      //set state used to change the property value dynamically
      this.setState({
        persons : [
          {
            name : 'Vignesh',
            age : '25'
          },
          {
            name : 'Deepan',
            age : '19'
          }
        ]
      })
      
    }

    nameChangeDynamicHandler = (props) => {
      this.setState({
        persons : [
          {
            name : 'Martu',
            age : props
          },
          {
            name : 'Deepan',
            age : '19'
          }
        ]
      })
      
    }

    twoWayBindingHandler = (ev) => {
      this.setState({
        persons : [
          {
            name : 'Martu',
            //this is do two way binding
            age : ev.target.value
          },
          {
            name : 'Deepan',
            age : '19'
          }
        ]
      })
      
    }


    

    render() {

      //Inline CSS
      const styling = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }

      return (
        <div className="App">
          <h1>Test React App</h1>
          {/*  Should not use this.nameChangeDynamicHandler() - should use this.nameChangeDynamicHandler - without param
                bind to pass value to state method - below os prefered way of passing value to state
          */}
          <button onClick={this.nameChangeDynamicHandler.bind(this,25)}>State Change</button>


          {/* inline style example */}
          <button style={styling} onClick={this.nameChangeHandler}>another button</button>

          {/* this is do two way binding*/}
          <input type="text" value ={this.state.persons[0].age} onChange={this.twoWayBindingHandler}/>

          {/* Passing name, age and Hooby to Person component 
            Also we can pass method reference nameChangeDynamicHandler
            () => this.nameChangeDynamicHandler(30) this is another way of passing value to state method
          */}
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            nameChange={() => this.nameChangeDynamicHandler(30)}>
              Hobby : Games
          </Person>

          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
          />

          <p>{this.state.info}</p>
        </div>
      );



  }
}

export default App;
