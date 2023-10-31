import css from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className={css.todoItem}>
      {todos.map(({ id, text }) => (
        <li key={id} className={css.todoList}>
          <p>{text}</p>
          <button
            type="button"
            onClick={() => onDeleteTodo(id)}
            className={css.todoButton}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
