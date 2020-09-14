import React, { useEffect, useState } from 'react';
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

const InitialPlants: Array<Todo> = [
  // { id: uuid(), text: "Monstera", complete: true },
  // { id: uuid(), text: "cactus", complete: false },
  // { id: uuid(), text: "string of hearts", complete: true }
];

const App: React.FC = () => {
  const classes = useStyles();

  //state
  const [plants, setPlants] = useState(InitialPlants);

  //get local storage first time App renders
  useEffect(() => {
    const InitialPlants = localStorage.getItem('plants');
    if (InitialPlants) {
      setPlants(JSON.parse(InitialPlants));
    }
  }, [])

  //storage
  useEffect(() => {
    localStorage.setItem('plants', JSON.stringify(plants))
  }, [plants])

  //add Todos from Form
  const addPlant: AddTodo = newPlant => {
    setPlants([...plants, { id: uuid(), text: newPlant, complete: false }])
  }

  return (
    <React.Fragment>
      <Container className={classes.margin} component="main" maxWidth="sm">
        <TodoList plants={plants} />
        <AddTodoForm addPlant={addPlant} />
      </Container>
    </React.Fragment>
  );
}

export default App;
