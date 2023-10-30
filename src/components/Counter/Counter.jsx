import { Component } from 'react';
import css from './Counter.module.css';

class Counter extends Component {
  render() {
    return (
      <div>
        <span>0</span>
        <div>
          <button type="button">Збільшити на 1</button>
          <button type="button">Зменшити на 1</button>
        </div>
      </div>
    );
  }
}

export default Counter;
