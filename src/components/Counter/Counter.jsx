import { Component } from 'react';
import css from './Counter.module.css';

import Controls from './Сontrols/Controls';

class Counter extends Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div className={css.counter}>
        <span className={css.spanText}>{this.state.value}</span>
        <Controls
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
