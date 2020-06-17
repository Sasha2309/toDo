import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from '../context'

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },

  input: {
    marginRight: "1rem",
  },
};

function TodoItem({ todo, index, onChange }) {
    const {removeTodo} = useContext(Context)

    
  return (
    <li style={styles.li}>
      <span className={todo.completed ? "done" : null}>
        <input
          style={styles.input}
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            onChange(todo.id);
          }}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>

      <button onClick={removeTodo.bind(null, todo.id)} className="rm">&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
