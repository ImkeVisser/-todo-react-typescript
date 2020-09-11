import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  margin: {
    marginTop: 60,
  },
});

const InitialTodos: Array<Todo> = [
  { id: uuid(), text: "Monstera", complete: true },
  { id: uuid(), text: "cactus", complete: false },
  { id: uuid(), text: "string of hearts", complete: true }
];

const App: React.FC = () => {
  const classes = useStyles();

  const [todos, setTodos] = useState(InitialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { id: uuid(), text: newTodo, complete: false }])
  }

  return (
    <React.Fragment>
      <Container className={classes.margin} component="main" maxWidth="xs">
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
      </Container>
    </React.Fragment>
  );
}

export default App;
