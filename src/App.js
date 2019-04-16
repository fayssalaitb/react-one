import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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
    //some CSS styles
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    // condition to check if we want to show or hide the person list
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonhandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    //what we return to the Dom after all the logic
    return (
      <div className="App">
        <h1>Hi its React</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          {" "}
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
