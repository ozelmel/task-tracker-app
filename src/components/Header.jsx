import React from "react";
import AddTaskForm from "./AddTaskForm";

const Header = () => {
  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button className="btn">SHOW ADD TASK BAR</button>
      <AddTaskForm />
    </header>
  );
};

export default Header;
