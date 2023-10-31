import css from '../Counter.module.css';

const Controls = ({ handleIncrement, handleDecrement }) => {
  return (
    <div>
      <button
        type="button"
        className={css.buttonCounter}
        onClick={handleIncrement}
      >
        Збільшити на 1
      </button>
      <button
        type="button"
        className={css.buttonCounter}
        onClick={handleDecrement}
      >
        Зменшити на 1
      </button>
    </div>
  );
};

export default Controls;
