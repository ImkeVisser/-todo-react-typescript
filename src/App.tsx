import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
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

  //state
  const [todos, setTodos] = useState(InitialTodos);



  //add Todos from Form
  const addTodo: AddTodo = newTodo => {
    setTodos([...todos, { id: uuid(), text: newTodo, complete: false }])
  }

  return (
    <React.Fragment>
      <Container className={classes.margin} component="main" maxWidth="sm">
        <TodoList todos={todos} />
        <AddTodoForm addTodo={addTodo} />
      </Container>
    </React.Fragment>
  );
}

export default App;
