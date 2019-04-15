import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 24 },
      { name: "Manu", age: 65 },
      { name: "Degg", age: 55 }
    ],
    otherState: "some value"
  };

  switchNameHandler = () => {
    //console.log('was clicked');
    // DONT DO THIS this.state.state.persons[0].name = "Laxx";
    this.setState({
      persons: [
        { name: "Laxx", age: 24 },
        { name: "Manu", age: 65 },
        { name: "Degg", age: 26 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi its React</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          click={this.switchNameHandler}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobies is Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
