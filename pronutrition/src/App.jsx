import React, { Component } from "react";
import Foodbox from "./components/Foodbox";
import FoodData from "./resources/FoodData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newArr: FoodData
    };
  }

  handleChange = (event) => {
    let filteredData = FoodData.filter((el) => el.name.includes(event.target.value));
    this.setState({ newArr: filteredData });
  };

  render() {
    let { newArr } = this.state;
    return (
      <>
        <div>
          <div>
            <input type="text" placeholder="Search Food here" onChange={this.handleChange} />
          </div>
          {newArr.map((el, i) => (
            <Foodbox key={i} {...el} />
          ))}
        </div>
      </>
    );
  }
}

export default App;

