import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = props => {
  console.log(classes);
  //condition to change the style of the Text
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join("")}>this is really happening</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};
export default cockpit;
