import React from "react";

import NumberInput from "./number-input";
import Output from "./output";

export default class RateCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 10,
      dayRate: 100,
      hours: 10
    };
  }
  dayRateChange = e => {
    // console.log(e.target.value)
    const value = parseInt(e.target.value, 0);
    this.setState({
      dayRate: value,
      rate: value / this.state.hours
    });
  };

  hourChange = e => {
    const value = parseInt(e.target.value, 0);
    this.setState({
      hours: value,
      rate: this.state.dayRate / value
    });
  };

  render() {
    // const rate = 10;
    console.log(this.state);
    return (
      <form>
        <NumberInput
          onChange={this.dayRateChange}
          id="day-rate"
          value={this.state.dayRate}
          label="Day rate"
          min={0}
          max={5000}
        />
        <NumberInput
          onChange={this.hourChange}
          id="hours"
          label="Hours"
          value={this.state.hours}
          min={1}
          max={12}
        />
        <Output
          id="hourly-rate"
          label="Hourly rate"
          value={this.state.rate.toFixed(2)}
        />
      </form>
    );
  }
}
