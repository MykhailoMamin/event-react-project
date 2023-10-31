import { Component } from 'react';
import css from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className={css.dropdown}>
        <button type="button" className="dropdown-button" onClick={this.toggle}>
          {this.state.visible ? 'Cховати' : 'Показати'}
        </button>

        {this.state.visible && (
          <div className={css.dropdownMenu}>Dropdown Menu</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
