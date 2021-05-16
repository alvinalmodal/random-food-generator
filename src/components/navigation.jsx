import React, { Component } from "react";
import { Menubar } from "primereact/menubar";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Menubar
          start={<h4>Random Meal Generator - #001 of #100Days100Projects</h4>}
        />
      </React.Fragment>
    );
  }
}

export default Navigation;
