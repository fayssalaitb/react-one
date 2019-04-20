import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
//import { prependOnceListener } from "cluster";

class App extends Component {
  // the DAta i'am working with
  state = {
    persons: [
      { id: "asdf1", name: "Max", age: 24 },
      { id: "asdf2", name: "Manu", age: 65 },
      { id: "asdf3", name: "Degg", age: 55 }
    ],
    otherState: "some value",
    showPersons: false
  };
  // a function that delete person from the DOM
  deletePersonhandler = personIndex => {
    //Copy the array then change it
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  //change the name of the person dinamicly
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };
  //toggele person list
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };
  // rendering everything
  render() {
    // condition to check if we want to show or hide the person list
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonhandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    //what we return to the Dom after all the logic
    return (
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />

        {persons}
      </div>
    );
  }
}

export default App;
